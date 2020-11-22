/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server';
import { resolvers } from './src/resolvers';
import { MoviesAPI } from './src/omdb';
import { typeDefs } from './src/schema';

require('dotenv').config();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    movieAPI: new MoviesAPI(),
  }),
});

const PORT = process.env.PORT || 4000;
// The `listen` method launches a web server.
server.listen({ port: PORT }).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`);
});
