const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/busyspecs').then(() => { 
    console.log("MongoDB connected Successfully!");
}).catch((err:Error) => { 
    console.log("Error while connecting MongoDB! ", err);
});