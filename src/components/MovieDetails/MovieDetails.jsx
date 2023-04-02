import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { GetMoviesDetails } from '../Service/MovieApi';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  const backLinkHref = location.state?.from ?? '/movies';
  //  const backLinkHref =  useRef (location.state?.from ?? '/movies')
  // than use  backLinkHref.current to get location object
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
              <Link to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Link>
            </li>
          </ul>

          <Suspense fallback={<div>Loading2...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
