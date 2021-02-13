/*
  This example shows how to query a third party graphql api
  with the request function from prisma's graphql-request
*/

import { request } from 'graphql-request';

export const getCharacters = async () => {
  const url = 'https://rickandmortyapi.com/graphql';
  const query = `
    query {
        characters {
            results {
                name
                id
            }
        }
    }
  `;

  const response = await request(url, query);
  return response;
};
