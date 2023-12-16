import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    todo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Todo'
    }
});

export const User = mongoose.models.users || mongoose.model('users', userSchema);
