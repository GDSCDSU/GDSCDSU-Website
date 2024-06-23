import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Contact model
interface IContact extends Document {
    name: string;
    email: string;
    message: string;
    createdAt: Date;
}

// Define the Contact schema
const ContactSchema: Schema = new Schema({
    firstName: {
        type: String,
    },
    lastName:{
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },

},{timestamps: true});

// Create and export the Contact model
const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export const createMessage = (message: Partial<IContact>) => Contact.create(message);
export const fetchMessages = () => Contact.find().sort({createdAt: -1});