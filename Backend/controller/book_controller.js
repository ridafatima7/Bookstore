const Book = require("../model/book_model");

const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("error", error);
    res.status(400).json(error);
  }
};

module.exports = {
  getBook,
};
