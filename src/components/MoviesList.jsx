import { Link } from 'react-router-dom';

const MoviesList = ({ data }) => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          listStyle: 'none',
        }}
      >
        {data.map(({ title, id }) => (
          <Link to={`${id}`} key={id}>
            {title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
