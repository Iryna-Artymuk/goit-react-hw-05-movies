import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from '../components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movie'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);
// import HomePage from '../Pages/Home';
// import Movies from '../Pages/Movie';
// import Cast from '../components/Cast';
// import Reviews from '../components/Reviews';
// import MovieDetails from './MovieDetails';
const App = () => {
  return (
    <>
      <ToastContainer autoClose={2000} hideProgressBar={false} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
