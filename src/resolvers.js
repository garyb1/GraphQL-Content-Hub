// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

import { getCountries } from './countries';
import { getCharacters } from './rickandmorty';
import books from '../data/books.json';

export const resolvers = {
  Query: {
    books: () => books,
    book: (_, { title }) => books.find((book) => title === book.title),
    countries: async () => {
      const { data: { countries } } = await getCountries();
      return [...countries.slice(0, 5)];
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
