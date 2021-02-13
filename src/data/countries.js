/*
  This example shows how to query a third party graphql api
  with the fetch api
*/

import fetch from 'node-fetch';

export const getCountries = async (code) => {
  const url = 'https://countries.trevorblades.com/';
  let query;
  if (code) {
    query = `
      query {
        countries(filter: { code: { eq: "${code}" } }) {
          name
          code
          capital
        }
      }
    `
  } else { 
    query = `query {
      countries {
        name
        code
        capital
      }
    }`; 
  }

  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  };

  const response = await fetch(url, opts);
  return response.json();
};
