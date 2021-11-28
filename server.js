//tutorial from Alex Merced YouTube used for token and auth with JWT
//https://www.youtube.com/watch?v=7laEQTjhe_E&t=280s
//https://www.youtube.com/watch?v=R-JyaR0LSHw&t=806s
//https://www.youtube.com/watch?v=8n0XjO79mIY
require("dotenv").config();
const { PORT = 3000 } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const AuthRouter = require('./controllers/user');
const HolRouter = require('./controllers/hol');
const WedRouter = require('./controllers/wed');
const ApiRouter = require('./controllers/api');

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
app.use('/api-route', ApiRouter);



app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});