const Button = ({ children, btnStyle, onClick, id }) => {
  return (
    <button id={id} onClick={onClick} className={btnStyle}>
      {children}
    </button>
  );
};

export default Button;
