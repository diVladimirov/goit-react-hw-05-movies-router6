import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from './Loader/Loader';

import Layout from './Layout/Layout';

// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews.js/Reviews';

const HomePage = lazy(() =>
  import('../pages/HomePage.js' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage.js' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  )
);
const Cast = lazy(() =>
  import('./Cast/Cast.js' /* webpackChunkName: "movie-details-page-cast" */)
);
const Reviews = lazy(() =>
  import(
    './Reviews/Reviews.js' /* webpackChunkName: "movie-details-page-reviews" */
  )
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
