import mongoose, { Schema, Document } from 'mongoose';

interface IEvent extends Document {
    name?: string;
    content?: string;
    title?: string;
    topEvent?: boolean;
    location?: string;
    speaker?: string;
    picture?: string;
    speakerImage?: string;
    speakerLinkedln?: string;
    SpeakerBio?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the event schema
const EventSchema: Schema = new Schema({
    name: { type: String },
    picture: { type: String },
    content: { type: String },
    title: { type: String },
    topEvent: { type: Boolean },
    location: { type: String },
    speaker: { type: String },
    speakerImage: { type: String },
    speakerBio: { type: String },
    speakerLinkedln: { type: String },
},{ timestamps: true });

// Create the event model
const EventModel = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export const createEvent = (event: any): Promise<any> => EventModel.create(event);
export const fetchEvent = (pipeline:any) => EventModel.aggregate([pipeline]);
export const fetchEventById = (id: string) => EventModel.findById(id);
export const deleteEvent = (id: string) => EventModel.findByIdAndDelete(id);

