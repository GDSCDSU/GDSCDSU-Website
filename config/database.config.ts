import mongoose from 'mongoose';

export const connectDB = (async () => {
    try {
        const DB_URI = `${process.env.MONGODB_URL}`;
        const conn = await mongoose.connect(DB_URI);
        console.log(`MongoDB Connected -> : ${conn.connection.name}`);

    } catch (error:any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
});