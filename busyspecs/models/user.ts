import { Schema } from "mongoose";
const multer = require("multer");
const path = require("path");
const AVATAR_PATH=path.join('/uploads/users/avatars');
const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    bio: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
      
    },
}, {
    timestamps: true
});

const storage = multer.diskStorage({
    destination: function (req:any, file:any, cb:any) { 
        cb(null, path.join(__dirname, '..', AVATAR_PATH))
    },
    filename: function (req:any, file:any, cb:any) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});


userSchema.statics.uploadedAvatar = multer({storage: storage }).single('avatar'); //avatar is fieldname here
userSchema.statics.avatarPath=AVATAR_PATH;
  
const User=mongoose.model('User',userSchema);
