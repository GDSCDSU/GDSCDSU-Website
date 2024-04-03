interface LoginCredentials {
    email: string;
    password: string;
  }

interface IUser {
    _id:string
    fullname: string;
    email: string;
    password: string;
    otp: string;
    isLead: boolean;
    createdAt: Date;
    updatedAt: Date;
    role:string
}

interface DecodedToken extends JwtPayload {
  email: string; 
}