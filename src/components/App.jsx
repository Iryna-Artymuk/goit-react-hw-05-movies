import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import HomePage from '../Pages/Home';
import Movies from '../Pages/Movie';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

import MovieDetails from './MovieDetails';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/movies" element={<Movies />} />
        </Route>

        <Route path="/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<p>Page not found(</p>} />
      </Routes>
    </>
  );
};

export default App;
