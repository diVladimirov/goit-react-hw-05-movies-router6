import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchFilmsDetails } from 'services/api';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState([]);
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setErrror] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const film = await fetchFilmsDetails(moviesId);
        setFilm(film);
      } catch (error) {
        setErrror(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [moviesId]);

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      {loading && <Loader />}
      {!error && <MovieDetails film={film} onGoBack={onGoBack} />}
    </>
  );
};

export default MovieDetailsPage;
