import axios from 'axios';

const APIkey = '?api_key=d0d2393ff57617bcd19c89c64bc8a08d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFilmsDetails = async id => {
  const response = await axios.get(`
  ${BASE_URL}/movie/${id}${APIkey}&append_to_response=credits,reviews`);
  return response.data;
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day${APIkey}`);
  return response.data;
};

export const fetchMoviesFromQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie${APIkey}&query=${query}`
  );
  return response.data;
};
