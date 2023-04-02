import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { GetReviews } from '../Service/MovieApi';
import { List, Card } from '../MoviesList/StyledMovie';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  //   const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId) {
      GetReviews(movieId)
        .then(({ results }) => {
          setReviews(results);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [movieId]);

  return (
    <>
      {error && <p>Something went wrong Try again later.😭</p>}
      {reviews.length === 0 ? (
        <p> here is no reviews yet</p>
      ) : (
        <List>
          {reviews.map(({ author, content, url }, index) => (
            <Card key={index}>
              <div>
                <p> {author}</p>
                <p> {content}</p>
              </div>
            </Card>
          ))}
        </List>
      )}
    </>
  );
};

export default Reviews;
