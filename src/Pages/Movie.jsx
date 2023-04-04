import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesList from '../components/MoviesList/MoviesList';
import Error from '../components/Error/ErrorView';

import { searchMovie } from '../components/Service/MovieApi';

import SearchForm from '../components/SearchForm/SearchForm';
import Button from '../components/Button/Button';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  //   const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  //   console.log(searchValue);
  const [searchQuery, searchParams] = useSearchParams();
  //   const query = searchQuery.get('searchQuery ') ?? '';

  const handelSubmit = value => {
    const nextQuery = value !== '' ? { searchQuery: value } : {};
    // console.log(value);
    searchParams(nextQuery);
    setMovies([]);
  };
  //   useEffect(() => {
  //     console.log(query);
  //     searchMovie(query, page)
  //       .then(data =>
  //         setMovies(prevStateMovies => [...prevStateMovies, ...data.results])
  //       )
  //       .catch(error => setError(error.message));
  //   }, [query, page, searchQuery]);

  useEffect(() => {
    if (searchQuery.get('searchQuery') === null) return;
    const query = searchQuery.get('searchQuery') ?? '';
    const getMovies = async () => {
      try {
        const moviesData = await searchMovie(query, page);
        console.log(searchQuery);
        setMovies(moviesData.results);
      } catch (Error) {
        setError(Error.message);
      } finally {
        // setLoading(false);
      }
    };
    getMovies();
  }, [page, searchQuery]);

  const handelClick = () => setPage(page + 1);
  return (
    <>
      <SearchForm handelSubmit={handelSubmit} />
      {error && <Error />}
      {movies && (
        <>
          <MoviesList data={movies} />
          {movies.length > 0 && (
            <Button type="button" onClick={handelClick}>
              Load More{' '}
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default Movies;
