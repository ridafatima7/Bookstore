const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoute = require('./route/book_route'); 
const userRoute=require('./route/user_model');
const cors = require('cors');
dotenv.config();
const app = express();
const port = process.env.port || 4001;
const mongoDbUri = process.env.mongoDbUri;
try {
  mongoose.connect(mongoDbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}
app.use(cors());
app.use(express.json());
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
