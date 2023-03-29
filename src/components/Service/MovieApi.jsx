// api_key: 'e55542ecb6aab3d889d16953eac82937'
import axios from 'axios';
const KEY = 'e55542ecb6aab3d889d16953eac82937';
axios.defaults.params = {
  api_key: KEY,
};
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export async function GetMovies(searchValue, page) {
  const { data } = await axios.get(`trending/movie/day`);

  return data;
}

export async function GetMoviesDetails(movieId) {
  const { data } = await axios.get(`/movie/${movieId}?language=en-US`);
  //   console.log(data);
  return data;
}

export async function GetCast(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits`);

  return data;
}
