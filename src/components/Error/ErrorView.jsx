import errorImage from './errorImage.png';
function Error({ text }) {
  console.log(text);
  return (
    <div
      style={{
        width: 600,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        padding: 20,

        margin: 'auto',
        fontSize: 24,
      }}
    >
      <p>{`We are sorry, something went wrong try again`}</p>
      <img src={errorImage} width="80%" alt="error" />
    </div>
  );
}

export default Error;
