/*
  This example shows how to query the omdb api using the apollo datasource package
*/

import { RESTDataSource } from 'apollo-datasource-rest';
import dotenv from "dotenv";
dotenv.config();

export class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://www.omdbapi.com';
  }

  async getMovie(name) {
    const response = await this.get(`/?${name ? (`t=${name}`) : 'i=tt3896198'}&apikey=${process.env.OMDB_API_KEY}`);
    return response;
  }
}
