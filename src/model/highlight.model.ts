import mongoose,{ Schema } from 'mongoose';

interface IHighlight {
    title: string;
    speaker: string;
    picture:string
    date: Date;
}


const highlightSchema = new Schema({
    title: {
        type: String,
    },
    speaker: {
        type: String,
    },
    picture:{
        type: String,
    
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const Highlight = mongoose.models.Highlight || mongoose.model<IUser>("Highlight", highlightSchema);

export const createHighlight = (obj:any) => Highlight.create(obj);

export const fetchHighlight = () => Highlight.find();

export const findHighlight = (query: any) => Highlight.findOne(query);

export const deleteHighlight = (id:string) => Highlight.findByIdAndDelete(id);