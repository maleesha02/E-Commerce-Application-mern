import express from 'express';
import Student from '../models/student.js';

const studentRouter = express.Router();

studentRouter.get("/" , (req,res)=>{
    Student.find().then(
        (data)=>{
            res.json(data)
        }
    )
})

studentRouter.post("/" , (req,res)=>{
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

export default studentRouter;