import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList';
import { searchMovie } from '../components/Service/MovieApi';

import SearchForm from '../components/SearchForm';
import Button from '../components/Button/Button';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(2);
  console.log(searchValue);
  const handelSubmit = value => setSearchValue(value);
  useEffect(() => {
    searchMovie(searchValue, page)
      .then(data =>
        setMovies(prevStateMovies => [...prevStateMovies, ...data.results])
      )
      .catch(error => setError(error.message));
  }, [searchValue, page]);
  console.log(movies);

  const handelClick = () => setPage(page + 1);
  return (
    <>
      <SearchForm handelSubmit={handelSubmit} />
      {error && <p>Something went wrong Try again later.😭</p>}
      {movies && (
        <>
          <MoviesList data={movies} />
          <Button type="button" onClick={handelClick}>
            {' '}
            Load More{' '}
          </Button>
        </>
      )}
    </>
  );
};

export default Movies;
