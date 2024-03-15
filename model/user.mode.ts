import mongoose, { Schema, Document } from 'mongoose';
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
    
}

const UserSchema: Schema = new Schema({
    fullname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    otp: {
        type: String,
    },
    isLead: {
        type: Boolean,
    },
   
},{timestamps: true});

const User = mongoose.model<IUser>('User', UserSchema);

// encrypt user password before saving
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password as string, 10);
    next();
});

// compare password
UserSchema.methods.isPasswordCorrect = async function (password:string) {
    return await bcrypt.compare(password, this.password);
};

// generate access token
UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            fullname:this.name
        },
        process.env.ACCESS_TOKEN_SECRET || "secret",
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
    );
};

