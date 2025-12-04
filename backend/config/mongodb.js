import mongoose from "mongoose";

const connectDB = async () => {
    // We check if the URI is actually loaded before attempting connection
     mongoose.connection.on('connected',()=>{
        console.log("DB Connected");

         
    })

    await mongoose.connect(process.env.MONGODB_URI);

}

export default connectDB;