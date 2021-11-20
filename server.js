require("dotenv").config();
const { PORT = 3000 } = process.env;
const express = require("express");
const app = express();
const mongoose = require("./db/db");
const cors = require("cors");
const morgan = require("morgan");
const AuthRouter = require('./controllers/user');
const HolRouter = require('./controllers/hol');
const WedRouter = require('./controllers/wed');

 //Middleware   
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json(req.payload);
});
/////////////////////////////////////////
//auth function/middleware
app.use('/auth', AuthRouter)
/////////////////////////////////////////
//routes from controllers
app.use('/wed-registry', WedRouter);
app.use('/hol-registry', HolRouter);



app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});