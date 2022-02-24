const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const {DB_CONNECTION} = require('./config/keys');
const app = express();
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoutes = require("./routes/posts");
app.use("/api/posts", postsRoutes);

//ROUTES
app.get("/api/home", (req, res) => {
  res.send("we are home now!");
});

//connect to DB
mongoose.connect(DB_CONNECTION, () =>
  console.log("connected to DB")
);

if(process.env.NODE_ENV == 'production'){
  const path = require('path');

  app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'../NFA_frontend','build')));
    res.sendFile(path.resolve(__dirname,'../NFA_frontend','build','index.html'))
  })
}

app.listen(9000);