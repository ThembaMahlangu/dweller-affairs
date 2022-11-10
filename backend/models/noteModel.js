const mongoose = require("mongoose");

const notesSchema = {
    title: String,
    email: String,
    password:{
        type: String,
        minlength:5,
        maxlength:10,
        required: true
    }
}

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;