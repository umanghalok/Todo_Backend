import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/index.js";
import todoRouter from "./routes/todo.router.js";
dotenv.config();

connectDB();
const app=express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.get('/',(req,res)=>{
    res.send("Todo App")
})
app.use("/",todoRouter)
app.listen(process.env.PORT||8000,()=>{
    console.log(`Listening to port: ${process.env.PORT||8000}`)
})