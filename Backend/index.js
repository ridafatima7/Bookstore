const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoute = require('./route/book_route'); 
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
app.use("/book",bookRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
