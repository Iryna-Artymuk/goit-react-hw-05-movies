import styled from '@emotion/styled';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 0rem;
  padding: 1rem;
`;

const Card = styled.li`
  display: flex;
  height: fit-content;
  flex-direction: column;
  padding: 1rem 1rem 2rem;
  background: #f8f3e8;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  transform: ${() => {
    const deg = Math.random() * (10 - -10) + -10;
    return 'rotate(' + deg + 'deg)';
  }};

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }

  h2 {
    margin-top: 1rem;
    font-family: 'Kalam', cursive;
    font-weight: normal;
    font-size: 2rem;
    color: #4a4a7d;
    text-align: center;
  }
  a {
    width: 100%;
    height: 100%;
  }
  p {
    font-family: 'Kalam', cursive;
    font-size: 1rem;
    color: #5e5e89;
    text-align: center;
  }
`;

export { List, Card };
