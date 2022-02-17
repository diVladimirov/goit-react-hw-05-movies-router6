import Layout from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/">{/* <HomePage /> */}</Route>
        <Route path="/movies">{/* <MoviesPage /> */}</Route>
        <Route path="/movies/:moviesId">{/* <MovieDetailsPage /> */}</Route>
      </Routes>
    </>
  );
};

export default App;
