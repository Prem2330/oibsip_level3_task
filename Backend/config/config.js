const mongoose=require('mongoose')
require('colors')
const dotenv = require("dotenv");
dotenv.config();

const connectDB=async()=>{
    try {
        const url=process.env.MONGO_URI
        const conn=await mongoose.connect(url,{});
       console.log(`MongoDB database connected! ${conn.connection.host}`.bgCyan.white)
    }
    catch (error) {
        console.log(`error ${error.message}`.bgRed.white);
    }
}

module.exports=connectDB;