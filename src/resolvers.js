// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

import { getCountries } from './data/countries.js';
import { getCharacters } from './data/rickandmorty.js';
import books from './data/books.js';

export const resolvers = {
  Query: {
    books: () => books,
    book: (_, { title }) => books.find((book) => title === book.title),
    countries: async (_, { code }) => {
      const { data: { countries } } = await getCountries(code);
      return [...countries.slice(0, 10)];
    },
    characters: async () => {
      const { characters: { results } } = await getCharacters();
      return results;
    },
    movie: (parent, { name }, { dataSources }) => (name
      ? dataSources.movieAPI.getMovie(name)
      : dataSources.movieAPI.getMovie()
    ),
  },
};
