import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetMoviesDetails } from './Service/MovieApi';
const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const MoviesData = await GetMoviesDetails(movieId);

        setMovieInfo(MoviesData);
      } catch (Error) {
        // setError(Error.message);
      } finally {
        // setLoading(false);
      }
    };
    getDetails();
  }, [movieId, setMovieInfo]);

  console.log(movieInfo);
  const Img_url = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <h1> Movie Details: {movieId}</h1>
      <img src={Img_url + movieInfo.poster_path} alt="" width={200} />
      <ul>
        <li>
          <Link to="cast"> Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
