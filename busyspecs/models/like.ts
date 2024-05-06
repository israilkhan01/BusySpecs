import { Schema, model } from "mongoose";

const likeSchema=new Schema({
    user:{
        type:mongoose.Schema.ObjectId,
    },
    //this defines the object iD of the liked object
    likeable:{
        type:mongoose.Schema.ObjectId,
        required:true,
        repath:'onModel'
    },
    onModel:{
         type:String,
         required:true,
         enum:['Post','Comment'],
    }
},{
    timestamps:true
});
const Like=model('Like',likeSchema);
module.exports=Like;