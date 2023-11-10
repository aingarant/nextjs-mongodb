import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

const uri = process.env.MONGO_URI || "";

export const connectToDB = async () => {
    const connection: any = {};

    try {
        if (connection.isConnected) return;


        const db = await mongoose.connect(uri);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to MongoDB");
    } catch (error: any) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error(error);
    }
};
