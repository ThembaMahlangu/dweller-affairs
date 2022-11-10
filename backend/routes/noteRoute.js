const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

//
router.route("/create").post((req, res) => {
    const title = req.body.title;
    const email = req.body.email;
    const password = req.body.password;
    const newNote = new Note({
        title,
        email,
        password
    });

    newNote.save();
})

module.exports = router;