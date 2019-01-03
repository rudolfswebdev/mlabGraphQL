const mongoose = require('mongoose');

const Queries = {
  book: async (_id) => {
    return (await bookModel.findOne(_id))
  },
  books: async () => {
    return (await bookModel.find())
  },
  booksByAuthor: async(parent,args) =>{
    return (await bookModel.find({author: args.author}))
  }
}
module.exports = Queries;