import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRouter from './Routes/productRouter.js';
import userRouter from './Routes/userRouter.js';
import jwt from 'jsonwebtoken';

const app = express();

app.use(bodyParser.json());

app.use(
    (req,res,next)=>{
        const tokenString = req.header("Authorization");
        if(tokenString != null){
            const token = tokenString.replace("Bearer " , "");

            jwt.verify(token , "cbc-batch-five#@2026" , (err,decoded)=>{
                if(decoded != null){
                    console.log(decoded);
                    req.user = decoded;
                    next();
                }else{
                    console.log("Invalid token");
                    res.status(403).json(
                        {message : "Invalid token"}
                    )
                }
            });
        }else{
            next();
        }
    }
)

mongoose.connect("mongodb://admin:123@ac-xxakvcg-shard-00-00.aalkbry.mongodb.net:27017,ac-xxakvcg-shard-00-01.aalkbry.mongodb.net:27017,ac-xxakvcg-shard-00-02.aalkbry.mongodb.net:27017/?ssl=true&replicaSet=atlas-trhm8d-shard-0&authSource=admin&appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Connection failed:", err);
});

app.use("/products" , productRouter);
app.use("/users" , userRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});