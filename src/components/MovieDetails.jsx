import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetMoviesDetails } from './Service/MovieApi';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    GetMoviesDetails(movieId)
      .then(moviesData => {
        setMovieInfo(moviesData);
        // console.log(moviesData.StatusCode);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [movieId, setMovieInfo]);
  //   console.log(error);

  const Img_url = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      {error && <p>Something went wrong Try again later.😭</p>}

      {!error && (
        <>
          <h1> Movie Details: {movieId}</h1>
          <img src={Img_url + movieInfo.poster_path} alt="" width={200} />
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
