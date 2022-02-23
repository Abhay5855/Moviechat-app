
require('dotenv').config();

const requests = {

    
  fetchTrending: `trending/all/day?api_key=${process.env.API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`,

}

export default requests;