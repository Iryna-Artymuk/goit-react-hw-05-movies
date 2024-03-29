import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { GetMoviesDetails } from '../../components/Service/MovieApi';

import {
  MovieCard,
  InfoSection,
  MovieHeader,
  Genres,
  MovieDesc,
  BackgroundImg,
  AdditionDetailsList,
  StyledLink,
  InfoBox,
} from './StyledMovieDetails';
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
  // console.log(movieInfo);
  const { title, overview, runtime, release_date, genres } = movieInfo;
  return (
    <>
      {error && <p>Something went wrong Try again later.😭</p>}

      {!error && (
        <>
          <MovieCard id="bright">
            <InfoSection>
              <StyledLink to={backLinkHref}> Go Back </StyledLink>
              <MovieHeader>
                <img src={Img_url + movieInfo.poster_path} alt={title} />
                <InfoBox>
                  <h1>{title}</h1>
                  <h4>{release_date}</h4>
                  <span>{runtime} min</span>
                  <Genres>
                    {genres?.map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))}
                  </Genres>
                  <AdditionDetailsList>
                    <li>
                      <StyledLink to="cast" state={{ from: backLinkHref }}>
                        Cast
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="reviews" state={{ from: backLinkHref }}>
                        Reviews
                      </StyledLink>
                    </li>
                  </AdditionDetailsList>
                </InfoBox>
              </MovieHeader>
              <MovieDesc>
                <p>{overview}</p>
              </MovieDesc>
            </InfoSection>
            <BackgroundImg
              url={Img_url + movieInfo.backdrop_path}
            ></BackgroundImg>
          </MovieCard>

          <MovieCard>
            <InfoSection>
              <Suspense fallback={<div>Loading2...</div>}>
                <Outlet />
              </Suspense>
            </InfoSection>
          </MovieCard>

          {/* <img src={Img_url + movieInfo.poster_path} alt="" width={200} /> */}
        </>
      )}
    </>
  );
};

export default MovieDetails;
