const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// Connection to MongoDB
mongoose.connect("mongodb+srv://dummybasejhb:Themba12345678@cluster0.s23vpex.mongodb.net/?retryWrites=true&w=majority")
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB Database Successfully")
})

//require route
app.use("/", require("./routes/noteRoute"));

app.listen(8000, function() {
    console.log("express server is running on port 8000");
})