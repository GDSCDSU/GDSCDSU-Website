import { generateRandomOTP, generateResponse } from "../util/method";
import { userLoginValidator } from "../../validation";
import { STATUS_CODES } from "../util/helper";
import { createUser, findUser } from "../model";
import { connectDB } from "../../config/database.config";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

class Auth {

  constructor() {
    connectDB();
  }

  private encryptPassword = async (password: string) => await bcrypt.hash(password, 10);
  // is user exist in database
  private isUserExist = async (email: string) => await findUser({ email });
  
  // Validate the request body
  private validate = async (body: any) => {
    const { error } = await userLoginValidator.validateAsync(body);

    if (error)
      return generateResponse(
        null,
        error.message,
        STATUS_CODES.UNPROCESSABLE_ENTITY
      );
  };
  // check is user valid
  private isUserValid = async (body: LoginCredentials) => {
      const user = await this.isUserExist(body.email);

      if (!user)  throw new Error("User not found")
      // Validate the password of the user
    
      const checkPassword =  await this.isPasswordCorrect(body.password, user.password)

      if(!checkPassword) throw new Error("Password does not match");
      return user;
  };

  // compare password
  private isPasswordCorrect = async function (
    password: string,
    userPassword: string
  ) {
    return await bcrypt.compare(password, userPassword);
  };
  // generate Access Token
  private generateAccessToken = function (user: IUser) {
    return jwt.sign(
      {
        id: user._id,
        email: user.email,
        fullname: user.fullname,
        role: user.role
      },
      process.env.ACCESS_TOKEN_SECRET || "secret",
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
    );
  };
  // login controller
  public login = async (request: Request) => {
    try {
      const body = await request.json();
      
      // validate the body
      await this.validate(body);

      // is user exist in database
     const user = await this.isUserValid(body);
   
      // create a jwt token for admin dashboard
      const token =   this.generateAccessToken(user);
      cookies().set('session', token, { maxAge: 60 * 60 * 24, });

      return generateResponse({  user,token }, "Login Successful", STATUS_CODES.SUCCESS);
    } catch (error: any) {
      return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  };
  // register controller
  public register = async(request:Request) =>{
    try {
      const body = await request.json();
      // validate the body
      await this.validate(body);
      // is user exist in database
      const user = await this.isUserExist(body.email);
      if(user) throw new Error("User with this email Already exist")
      // hash the password
      body.password = await this.encryptPassword(body.password);
      // create user
      const newUser = await createUser(body);

      return generateResponse(newUser, "User created successfully", STATUS_CODES.CREATED);
    } catch (error: any) {
      return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  }

  // otp controller
  public generateOTP = async(request:Request) =>{
    try {
      const body = await request.json();

      // is user exist in database
      const user = await this.isUserExist(body.email);
      if(!user) throw new Error("User with this email does not exist")

      // generate OTP
      const otp = generateRandomOTP();
      // save otp and expiry time in database
      user.otp = otp;
      user.otpExpiry = new Date(Date.now() + 60000);
      await user.save();
      // send otp to user email
      // sendEmail(user.email,otp);
      return generateResponse(otp, "OTP sent to your email will expiry in 5 mins", STATUS_CODES.SUCCESS);
    } catch (error: any) {
      return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  }
  // verify otp controller
  public verifyOTP = async(request:Request) =>{
    try {
      const body = await request.json();

      // is user exist in database
      const user = await this.isUserExist(body.email);
      if(!user) throw new Error("User with this email does not exist")

      // check if otp is valid
      if(user.otp !== body.otp) throw new Error("Invalid OTP")
      // check if otp is expired
      if(new Date() > user.otpExpiry) throw new Error("OTP expired")
      // generate Access Token
      const token = this.generateAccessToken(user);
      
      user.otp = null;
      user.otpExpiry = null;
      user.save();

      cookies().set('otpToken', token, { maxAge: 60 * 5, });
      
      return generateResponse(null, "OTP verified successfully", STATUS_CODES.SUCCESS);
    } catch (error: any) {
      return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  }
  // reset password controller
  public resetPassword = async(request:Request) => {
    try {
      const body = await request.json();
      
      // decode the token
      const decodeToken = jwt.verify(cookies().get('otpToken')?.value ?? '', process.env.ACCESS_TOKEN_SECRET || "secret")  as DecodedToken;
      // find user 
      const user = await this.isUserExist(decodeToken.email);
      if(!user) throw new Error("User with this email does not exist")

      // hash the password and then update it
      const hash = await this.encryptPassword(body.password);
      user.password = hash;
      user.save();
      
      // destory the cookies
      cookies().delete('otpToken');
      
      return generateResponse(null, "Password reset successfully", STATUS_CODES.SUCCESS);
    } catch (error: any) {
      return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  }
}

const auth = new Auth();
export { auth };
