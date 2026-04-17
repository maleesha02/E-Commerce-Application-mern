import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/student.js';

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:123@cluster0.qvmx5q6.mongodb.net/?appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB");
}).catch(()=>{
    console.log("Connection failed");
})

app.get("/" , (req,res)=>{
    Student.find().then((data)=>{
        res.json(data)
    })
});

//mongodb+srv://admin:123@cluster0.qvmx5q6.mongodb.net/?appName=Cluster0

app.post("/" , (req,res)=>{
    console.log(req.body);

    const student = new Student({
        name : req.body.name,
        age : req.body.age,
        stream : req.body.stream,
        email : req.body.email
    });

    student.save().then(()=>{
        res.json({message : 'Student added successfully'});
    }).catch(()=>{
        res.json({message : 'Failed to add student'});
    })
});

app.delete("/" , (req,res)=>{
    res.json({message : 'This is a delete request'})
});

app.put("/" , (req,res)=>{
    res.json({message : 'This is a put request'})
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});