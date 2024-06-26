const multer=require('multer');
const path=require('path');
const AVATAR_PATH = path.join('/uploads/users/PostAvatar');

const postSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    html: {
        type: String,
        required: true
    },
    css: {
        type: String,
        required: true
    },
    js: {
        type: String,
        required: true
    },
    images: [
        { type: String }
    ], // Array of image URLs

    //include the array of ids of all comments in  the post schema itself
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }],
    likes:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
      }
    ],
 },
{
    timestamps:true
});

const storage = multer.diskStorage({
    destination: function (req:any, file:any, cb:any) {
      cb(null,path.join( __dirname,'..',AVATAR_PATH))
    },
    filename: function (req:any, file:any, cb:any) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });

postSchema.statics.uploadedAvatar = multer({storage: storage }).single('postImage'); //avatar is fieldname here
postSchema.statics.avatarPath=AVATAR_PATH;
const Post=mongoose.model('Post',postSchema);
module.exports=Post;