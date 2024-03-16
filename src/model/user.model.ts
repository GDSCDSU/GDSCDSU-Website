import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  otp: string;
  isLead: boolean;
  createdAt: Date;
  updatedAt: Date;
  isPasswordCorrect(password: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    otp: {
      type: String,
    },
    otpExpiry:{
        type:Date,
    },
    role: {
      type: String,
      enum: ["team-member", "lead"],
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

// encrypt user password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password as string, 10);
  next();
});


export const createUser = (obj: IUser) => User.create(obj);
export const findUser = (query: any) => User.findOne(query);

