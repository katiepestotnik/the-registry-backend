require("dotenv").config();
const { PORT = 3000, MONGODB_URL} = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const axios = require("axios")

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection
    .on("open", () => console.log("Mongoose Connected"))
    .on("close", () => console.log("Mongoose Closed"))
    .on("error", (err) => console.log(`Mongoose Error: ${err}`));

app.get("/", (req, res) => {
    res.send("Registry Home Route");
});


  

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});