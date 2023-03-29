const Button = ({ SearchFormButton, LoadMore, children, onClick, type }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
