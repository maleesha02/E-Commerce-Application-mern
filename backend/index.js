import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/student.js';
import studentRouter from './Routes/studentRouter.js';
import productRouter from './Routes/productRouter.js';
import userRouter from './Routes/userRouter.js';

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://admin:123@ac-xxakvcg-shard-00-00.aalkbry.mongodb.net:27017,ac-xxakvcg-shard-00-01.aalkbry.mongodb.net:27017,ac-xxakvcg-shard-00-02.aalkbry.mongodb.net:27017/?ssl=true&replicaSet=atlas-trhm8d-shard-0&authSource=admin&appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Connection failed:", err);
});

app.use("/students", studentRouter);
app.use("/products" , productRouter);
app.use("/users" , userRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});