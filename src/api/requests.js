


const API_KEY='d97b3e0257a2c71f178ef69c4ca4f27c';
const BASE_URL='https://api.themoviedb.org/3'

const requests = {

    

    
  fetchTrending: `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,

}

export default requests;