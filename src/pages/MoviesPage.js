import { useState, useEffect } from 'react';
import { fetchMoviesFromQuery } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Movies from 'components/Movies/Movies';

const MoviesPage = () => {
  const [moviesList, setMovieList] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setErrror] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieToFind = searchParams.get('movieToFind');

  useEffect(() => {
    if (movieToFind === null) {
      return;
    }
    async function fetchMovies() {
      setloading(true);
      try {
        const data = await fetchMoviesFromQuery(movieToFind);
        setMovieList(data.results);
      } catch (error) {
        setErrror(error.message);
      } finally {
        setloading(false);
      }
    }
    fetchMovies();
  }, [movieToFind]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ movieToFind: event.target.elements.movieToFind.value });
    event.target.elements.movieToFind.value = '';
  };

  return (
    <>
      {loading && <Loader />}
      {!error && <Movies onSubmit={handleSubmit} moviesList={moviesList} />}
    </>
  );
};

export default MoviesPage;
