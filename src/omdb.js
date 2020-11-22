/*
  This example shows how to query the omdb api using the apollo datasource package
*/

const { RESTDataSource } = require('apollo-datasource-rest');

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
