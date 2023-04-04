import { useState, useEffect } from 'react';
import { GetMovies } from '../components/Service/MovieApi';

import MoviesList from '../components/MoviesList/MoviesList';
import Error from '../components/Error/ErrorView';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  //   console.log(movies);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const MoviesData = await GetMovies();

        setMovies(MoviesData.results);
      } catch (Error) {
        setError(Error.message);
        console.log(Error.message);
      } finally {
        // setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {error && <Error />}
      {movies && <MoviesList data={movies} path="movies/" />}
    </>
  );
};

export default HomePage;
