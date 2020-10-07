const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String,
});

const Post = mongoose.model("Book", bookSchema);

module.exports = Book;
