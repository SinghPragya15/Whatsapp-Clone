import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const USERNAME =process.env.DB_USERNAME;
const PASSWORD =process.env.DB_PASSWORD;
const Connection=async()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-ndeftcx-shard-00-00.amp1hnk.mongodb.net:27017,ac-ndeftcx-shard-00-01.amp1hnk.mongodb.net:27017,ac-ndeftcx-shard-00-02.amp1hnk.mongodb.net:27017/?ssl=true&replicaSet=atlas-dxaj3d-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Clone-Whatsapp`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true})
         console.log('Database connected successfully');   
    }catch(error)
    {
       console.log("Error while connecting with database",error.message);
    }
}

export default Connection;