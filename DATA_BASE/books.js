const mongoose = require("mongoose");
// SCHEMA (mongodb) for book
const BookSchema = mongoose.Schema({
  ISBN: String,
  title: String,
  pubDate: String,
  language: String,
  numPage: Number,
  author: [Number],
  publications: Number,
  category: [String]
});

//Creating bookmodel
const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;
