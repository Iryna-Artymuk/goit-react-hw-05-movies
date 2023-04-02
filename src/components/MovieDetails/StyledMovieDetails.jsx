import styled from '@emotion/styled';
// const  MovieHeader = styled.div``

const MovieCard = styled.div`
  position: relative;
  display: block;
  width: 800px;
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
    width: 95%;
    margin: 30px auto;
    min-height: 350px;
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
  @media screen and (min-width: 768px) {
    width: 65%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 85px;
  }
  h1 {
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

const Genres = styled.ul`
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
  color: #959595;
`;

const MovieDesc = styled.div`
  padding: 25px;
  height: 50%;
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
    background-position: -100% 10%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    background-position: 50% 50%;
  }

  height: 100%;

  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 11px;
  background: url(${props => props.url});
`;

// @media screen and (max-width: 768px) {

//   .info_section{
//     background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
//     display: inline-grid;
//   }
// }

// .bright_back{
//   background: url("https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg");
// }

export {
  MovieCard,
  InfoSection,
  MovieHeader,
  Genres,
  MovieDesc,
  BackgroundImg,
};
