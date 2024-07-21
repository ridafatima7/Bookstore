const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv=require("dotenv");
dotenv.config();
const port=process.env.port || 4001;
const mongoDbUri=process.env.mongoDbUri;

try{
  mongoose.connect(mongoDbUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("connected to mongodb")
}catch(error){
  console.log("Error",error)
}
app.listen(port)