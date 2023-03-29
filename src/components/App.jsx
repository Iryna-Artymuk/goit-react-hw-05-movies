import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../Pages/Home';
import Movies from '../Pages/Movie';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

import MovieDetails from './MovieDetails';
const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/"> Home</NavLink>
        <br />
        <NavLink to="/movies"> Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
