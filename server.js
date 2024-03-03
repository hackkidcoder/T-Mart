import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"

//configure env file
dotenv.config();//can pass a path in the parameter as a object if .env file is not present in the root 

//database config
connectDB();
//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));


//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to T-Mart App</h1>")
})

//port number
const port=process.env.port


//run or listen
app.listen(port,()=>{
    console.log(`Server running on ${process.env.mode} mode port ${port}`);
})