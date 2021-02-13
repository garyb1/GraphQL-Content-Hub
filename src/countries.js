/*
  This example shows how to query a third party graphql api
  with the fetch api
*/

import fetch from 'isomorphic-fetch';

export const getCountries = async () => {
  const url = 'https://countries.trevorblades.com/';
  const query = `
    query {
      countries {
        name
        code
        capital
      }
    }
  `;

  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  };

  const response = await fetch(url, opts);
  return response.json();
};
