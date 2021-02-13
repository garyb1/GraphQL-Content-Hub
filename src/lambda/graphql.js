import { ApolloServer } from 'apollo-server-lambda';
import { resolvers } from '../resolvers.js';
import { MoviesAPI } from '../data/omdb.js';
import { typeDefs } from '../schema.js';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    movieAPI: new MoviesAPI(),
  }),
  introspection: true,
  playground: true,
});



exports.handler = server.createHandler();