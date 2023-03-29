import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../Pages/Home';

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
        <Route
          path="/movies"
          element={
            <div style={{ width: '50vw', height: '50vh', background: 'green' }}>
              <h2> here will be search form </h2>
            </div>
          }
        />

        <Route path="/:movieId" element={<MovieDetails />}>
          <Route
            path="cast"
            element={
              <div
                style={{ width: '20vw', height: '20vh', background: 'green' }}
              >
                <h2> here will be cast</h2>
              </div>
            }
          />
          <Route
            path="reviews"
            element={
              <div
                style={{ width: '20vw', height: '20vh', background: 'pink' }}
              >
                <h2> here will be cast</h2>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
