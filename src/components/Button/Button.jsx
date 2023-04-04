import { Styledbutton } from './StyledButton';

const Button = ({ SearchFormButton, children, onClick, type }) => {
  return (
    <Styledbutton type={type} onClick={onClick} SearchFormButton>
      {children}
    </Styledbutton>
  );
};

export default Button;
