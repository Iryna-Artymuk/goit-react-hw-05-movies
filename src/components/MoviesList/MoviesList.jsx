import { Link, useLocation } from 'react-router-dom';
import { List, Card } from './StyledMovie';

const Img_url = 'https://image.tmdb.org/t/p/w500';

const MoviesList = ({ data, path }) => {
  const location = useLocation();
  // console.log(data);
  return (
    <List>
      {data.map(({ title, id, poster_path, overview }, index) => (
        <Card key={index}>
          <Link to={`${path ?? ''}${id}`} state={{ from: location }}>
            {/* <LinkStyled to={`${linkTo ?? ''}${id}`} state={{ from: location }}></LinkStyled> */}
            <img src={Img_url + poster_path} alt={title} />
            <h2> {title}</h2>
          </Link>
        </Card>
      ))}
    </List>
  );
};

export default MoviesList;
