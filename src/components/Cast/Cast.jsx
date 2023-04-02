import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { GetCast } from '../Service/MovieApi';

import { List, Card } from '../MoviesList/StyledMovie';
const Cast = () => {
  const [cast, setCast] = useState([]);
  //   const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId) {
      GetCast(movieId)
        .then(({ cast }) => {
          //   console.log(cast);
          setCast(cast);
        })
        .catch(error => {
          //   setError(error.message);
        });
    }
    return;
  }, [movieId]);
  const Img_url = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <List>
        {cast.map(actor => (
          <Card key={actor.id}>
            <div>
              <img src={Img_url + actor.profile_path} alt="" width={100} />
              <p> {actor.name}</p>
              <p> character {actor.character}</p>
            </div>
          </Card>
        ))}
      </List>
      >
    </>
  );
};

export default Cast;
