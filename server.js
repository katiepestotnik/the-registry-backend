require("dotenv").config();
const { PORT = 3000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection
    .on("open", () => console.log("Mongoose Connected"))
    .on("close", () => console.log("Mongoose Closed"))
    .on("error", (err) => console.log(`Mongoose Error: ${err}`));

///////////////////////////////////////////////////////////////////
//MODELS
const WedSchema = new mongoose.Schema({
        itemName: String,
        itemDescription: String,
        itemUrl: String,
});
const WedRegistry = mongoose.model("WedRegistry", WedSchema);

const HolSchema = new mongoose.Schema({
    itemName: String,
    itemDescription: String,
    itemUrl: String,
});
const HolRegistry = mongoose.model("HolRegistry", HolSchema)
    
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Registry Home Route");
});
/////////////////////////////////////////
//ROUTES
//Index Routes
app.get("/wed-registry", async (req, res) => {
    try {
      res.json(await WedRegistry.find({}));
    } catch (error) {
      res.status(400).json(error);
    }
});
app.get("/hol-registry", async (req, res) => {
    try {
      res.json(await HolRegistry.find({}));
    } catch (error) {
      res.status(400).json(error);
    }
});
//Create Routes
app.post("/wed-registry", async (req, res) => {
    try {
      res.json(await WedRegistry.create(req.body));
    } catch (error) {
      res.status(400).json(error);
    }
});
app.post("/hol-registry", async (req, res) => {
    try {
      res.json(await HolRegistry.create(req.body));
    } catch (error) {
      res.status(400).json(error);
    }
});
//Update Routes
app.put("/wed-registry/:id", async (req, res) => {
    try {
      res.json(
        await WedRegistry.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json(error);
    }
});
app.put("/hol-registry/:id", async (req, res) => {
    try {
      res.json(
        await HolRegistry.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json(error);
    }
});
//Delete Routes
app.delete("/wed-registry/:id", async (req, res) => {
    try {
      res.json(await WedRegistry.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
});
app.delete("/hol-registry/:id", async (req, res) => {
    try {
      res.json(await HolRegistry.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
});



app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});