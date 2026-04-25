import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    isBLocked : {
        type : Boolean,
        default : false,

    },
    role : {
        type : String,
        default : "Customer"
    },
    img : {
        type : String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },

});

const User = mongoose.model("user", userSchema);

export default User;  