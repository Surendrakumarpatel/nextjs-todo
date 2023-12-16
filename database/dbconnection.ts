import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = await mongoose.connection;
        connection.on("connected", ()=>{
            console.log("Connected to MongoDB");
        })
        connection.on("error", ()=>{
            console.log("Error connecting to MongoDB");
            process.exit();
        })
    } catch (error) {
        console.log(error);
    }
}