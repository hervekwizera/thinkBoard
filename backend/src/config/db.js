import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('CONNECTED TO MONGOODB SUCCESSFULLY!');
    } catch (error) {
        console.error('Error connected to mongoodb:', error);
        process.exit(1); //export with failure. 
    }
}