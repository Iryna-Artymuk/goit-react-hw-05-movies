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
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
