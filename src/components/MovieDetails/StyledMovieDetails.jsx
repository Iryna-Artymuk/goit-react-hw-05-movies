import styled from '@emotion/styled';
// const  MovieHeader = styled.div``
import { Link } from 'react-router-dom';
const MovieCard = styled.div`
  position: relative;

  display: block;
  width: 90vw;
  height: fit-content;

  margin: 30px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    transition: all 0.4s;
  }

  @media screen and (max-width: 768px) {
    margin: 30px auto;

    height: auto;
  }
`;

const InfoSection = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }

  @media screen and (max-width: 767px) {
    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
    display: inline-grid;
  }

  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
`;

const MovieHeader = styled.div`
  position: relative;

  padding: 25px;
  height: 40%;
  font-size: 18px;
  height: fit-content;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 85px;
  }
  h2 {
    font-size: 24px;
    color: black;
    font-weight: 400;
  }
  h4 {
    color: #555;
    font-weight: 400;
  }
  img {
    position: relative;
    float: left;
    margin-right: 20px;
    height: 100px;

    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
    span {
      display: inline-block;
      margin-top: 15px;
      color: #555;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.05);
    }
  }
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Genres = styled.ul`
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
  color: #959595;
`;

const MovieDesc = styled.div`
  height: 50%;
  padding-left: 25px;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  p {
    color: #545454;
  }
`;

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  height: 100%;

  background-size: cover;

  border-radius: 11px;
  background: url(${props => props.url});
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    background-position: 50% 50%;
  }
`;

const AdditionDetailsList = styled.ul`
  display: flex;
  gap: 10px;
`;
const StyledLink = styled(Link)`
  padding: 3px 5px;

  background: #f8f3e8;
  color: #f50930;
  border-radius: 4px;
`;

export {
  MovieCard,
  InfoSection,
  MovieHeader,
  Genres,
  MovieDesc,
  BackgroundImg,
  AdditionDetailsList,
  StyledLink,
  InfoBox,
};
