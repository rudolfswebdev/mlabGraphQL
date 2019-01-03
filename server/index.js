const mongoose = require('mongoose');
const { GraphQLServer }  = require('graphql-yoga');
const Mutation = require('./resolvers/mutation')
const Query = require('./resolvers/query');

const Schema = mongoose.Schema;

const connection = mongoose.connect('mongodb://admin:password1@ds247479.mlab.com:47479/bookstore', {useNewUrlParser: true})

const bookSchema = new Schema({
  name: {type: String},
  description: {type: String},
  author: {type: String}
},{collection:"books"})
const bookModel = mongoose.model('books', bookSchema);


//converts id type to string so that GraphQL can read it
const { ObjectId } = mongoose.Types;
ObjectId.prototype.valueOf = function() {
  return this.toString();
};


const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers:{
    Mutation : Mutation,
    Query: Query
  }
})

server.start(() => console.log('Server is running on port 4000'))