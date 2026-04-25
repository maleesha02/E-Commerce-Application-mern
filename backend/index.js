import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/student.js';
import studentRouter from './Routes/studentRouter.js';
import productRouter from './Routes/productRouter.js';

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:123@cluster0.aalkbry.mongodb.net/?appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB");
}).catch(()=>{
    console.log("Connection failed");
})

app.use("/students", studentRouter);
app.use("/products" , productRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});