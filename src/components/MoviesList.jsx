import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ data }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          listStyle: 'none',
        }}
      >
        {data.map(({ title, id }, index) => (
          <li key={index}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
