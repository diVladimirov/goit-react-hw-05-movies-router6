import { useState, useEffect } from 'react';
import GetProperties from 'helpers/GetProperties';
import { fetchTrendingMovies } from 'services/api';
import Home from 'components/Home/Home';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setErrror] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      setloading(true);
      try {
        const { results } = await fetchTrendingMovies();
        const films = GetProperties(results);
        setFilms(films);
      } catch (error) {
        setErrror(error.message);
      } finally {
        setloading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!error && <Home films={films} />}
    </>
  );
};

export default HomePage;
