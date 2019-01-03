const mongoose = require('mongoose');

const Mutations = {
  createBook: async (parent, args, info) => {
    console.log(args.name);
    const newBook = new bookModel({name: args.name, description: args.description,author: args.author});
    await newBook.save((err, book)=>{
      if(err) return err;
      else{
        console.log(book);
      }
    },info)
  },
  async deleteBook(parent, args){
    await bookModel.deleteOne({_id: args._id}, (err,res)=> {
      if (err) return err;
      else return res;
    })
  },
  async updateBook(parent, {_id,...args}){
    await bookModel.findOneAndUpdate({_id}, {...args},(err) =>{
      if(err) return err;
      else return true;
    })
  }
}

module.exports = Mutations