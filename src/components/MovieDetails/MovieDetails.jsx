import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { GetMoviesDetails } from '../Service/MovieApi';

import { MovieCard, InfoSection, MovieHeader } from './StyledMovieDetails';
const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  // console.log(location);
  const backLinkHref = location.state?.from ?? '/movies';
  //  const backLinkHref =  useRef (location.state?.from ?? '/movies')
  // than use  backLinkHref.current to get location object

  useEffect(() => {
    GetMoviesDetails(movieId)
      .then(moviesData => {
        setMovieInfo(moviesData);
        // console.log(moviesData.StatusCode);
      })
      .catch(error => {
        setError(error.message);
        console.log(error.message);
      });
  }, [movieId, setMovieInfo]);

  const Img_url = 'https://image.tmdb.org/t/p/w500';
  console.log(movieInfo);
  const { title, overview, runtime, release_date } = movieInfo;
  return (
    <>
      {error && <p>Something went wrong Try again later.😭</p>}

      {!error && (
        <>
          <Link to={backLinkHref}> Go Back </Link>
          <MovieCard id="bright">
            <InfoSection>
              <MovieHeader>
                <img src={Img_url + movieInfo.poster_path} alt={title} />
                <h1>{title}</h1>
                <h4>{release_date}</h4>
                <span class="minutes">{runtime} min</span>
                {/* <ul class="type">
                  {genres.map(item => (
                    <li>{item.name}</li>
                  ))}
                </ul> */}
              </MovieHeader>
              <div class="movie_desc">
                <p class="text">{overview}</p>
              </div>
              <div class="movie_social">
                <ul>
                  <li>
                    <i class="material-icons">share</i>
                  </li>
                  <li>
                    <i class="material-icons"></i>
                  </li>
                  <li>
                    <i class="material-icons">chat_bubble</i>
                  </li>
                </ul>

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
              </div>
              <Suspense fallback={<div>Loading2...</div>}>
                <Outlet />
              </Suspense>
            </InfoSection>
            <div class="blur_back bright_back"></div>
          </MovieCard>

          {/* <img src={Img_url + movieInfo.poster_path} alt="" width={200} /> */}
        </>
      )}
    </>
  );
};

export default MovieDetails;
