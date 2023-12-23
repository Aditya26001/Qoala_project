import express from "express";
import dotenv from "dotenv"
import connectDB from "./backend/src/db/connection.js";

dotenv.config()

const app  = express()

const port = process.env.PORT||3000

connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection Error",err);
})
