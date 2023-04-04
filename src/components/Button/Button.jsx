import { Styledbutton } from './StyledButton';

const Button = ({ ButtonType, children, onClick, type }) => {
  // console.log(ButtonType);
  return (
    <Styledbutton type={type} onClick={onClick} ButtonType={ButtonType}>
      {children}
    </Styledbutton>
  );
};

export default Button;
