import User from "../models/user.js";

export function createUser(req,res){
    const user = new User({
        email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : req.body.password,
        role : req.body.role
    })

    user.save().then(()=>{
        res.json({message : 'User Created Successfully'})
    }).catch(()=>{
        res.json({message : 'Failed to create user'})
    })
};
