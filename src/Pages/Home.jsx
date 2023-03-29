import { useState, useEffect } from 'react';
import { GetMovies } from '../components/Service/MovieApi';

import MoviesList from '../components/MoviesList';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  //   const [error, setError] = useState([]);
  //   console.log(movies);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const MoviesData = await GetMovies();

        setMovies(MoviesData.results);
      } catch (Error) {
        // setError(Error.message);
      } finally {
        // setLoading(false);
      }
    };
    getMovies();
  }, []);

  return <>{movies && <MoviesList data={movies} />}</>;
};

export default HomePage;
