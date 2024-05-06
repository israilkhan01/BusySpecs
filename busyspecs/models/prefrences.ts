import { Schema } from "mongoose";



const prefrencesSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    }
}, {
    timestamps: true
});

const Prefrences = mongoose.model('Prefrences', prefrencesSchema);
module.exports = Prefrences;