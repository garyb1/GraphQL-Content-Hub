/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-server-lambda';

// # A schema is a collection of type definitions (hence "typeDefs")
// # that together define the "shape" of queries that are executed against
// # your data.

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # This "Country" type defines the queryable fields for every country from the countries.trevorblades.com/ api
  type Country {
    code: String
    name: String
    capital: String
  }

  # This "Character" type defines the queryable fields for every character from the rick and morty api
  type Character {
    name: String
    id: String
  }

  # This "Movie" type defines the queryable fields for a given movie from the omdb api
  type Movie {
    Title: String
    Year: String
    Rated: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book],
    book(title: String!): Book,
    countries(code: String): [Country],
    characters: [Character],
    movie(name: String): Movie,
  }
`;
