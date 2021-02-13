# GraphQL Content Hub

Hi! This repo is for an Apollo GraphQL Server acting as a **content hub**. 
The goal of this was to try and pull in data from different sources as serve them from one graphql server.

Url: [Netlify](https://gql-content-hub.netlify.app/.netlify/functions/graphql)

![Netlify Status](https://api.netlify.com/api/v1/badges/90cfd0e2-a13e-4e9a-8058-6cf6eda99682/deploy-status)](https://app.netlify.com/sites/gql-content-hub/deploys)

Blog Available on

- [Hashnode](https://hashnode.garybyrne.codes/creating-an-apollo-server-graphql-content-hub?guid=e882229e-a092-4402-9284-cc66cb7e525e&deviceId=41b56dee-5e9a-440e-b584-120a725f44bc)
- [Dev.to](https://dev.to/garybyrne/creating-an-apollo-server-graphql-content-hub-721)
- [Garybyrne.codes](https://www.garybyrne.codes/posts/create-an-apollo-graphql-server-content-hub/)

## Sources

The following information is used in the content hub

- Books JSON File stored in the codebase
- Rick and Morty GraphQL API
- OMDB Rest API
- Trevorblades Countries GraphQL API

## Stack

This project is essentially running an **apollo server** with the following dependancies:

- apollo-server
- graphql
- graphql-request
- isomorphic-fetch
- apollo-datasource-rest

### Available Queries

#### Rick and Morty

```
characters {
  	name
	id
}
```

#### Books

Search for all books and query by a Book Id.

```
books {
  title
  author
}

book(title: "The Awakening") {
  author
}
```

#### Movie

Returns a random movie from the OMDB API.
Search for a movie also by name

```
#returns random movie
movie {
  Title
  Year
  Rated
}
#returns a random batman movie
movie(name: "Batman") {
  Title
  Year
  Rated
}
```

#### Countries

```
countries {
  name
  code
  capital
}
```

## Useful Links

- Learn with Jason - https://learnwithjason.dev/build-your-own-content-hub-with-graphql
- Eve Porcello - https://moonhighway.com/fetching-data-from-a-graphql-api
- Apollo GraphQL - https://apollographql.com/docs
