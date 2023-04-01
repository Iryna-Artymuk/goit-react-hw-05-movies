import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetMoviesDetails } from './Service/MovieApi';

const MovieDetails = ({ from }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log(location.state);
  useEffect(() => {
    GetMoviesDetails(movieId)
      .then(moviesData => {
        console.log('use efect');
        setMovieInfo(moviesData);
        // console.log(moviesData.StatusCode);
      })
      .catch(error => {
        setError(error.message);
        console.log(error.message);
      });
  }, [movieId, setMovieInfo]);

  const Img_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {error && <p>Something went wrong Try again later.😭</p>}

      {!error && (
        <>
          <Link to={backLinkHref}> Go Back </Link>
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
