// 부모 컴포넌트에서 자식 컴포넌트에게 값을 전달하는 props
// 자식 컴포넌트에서 부모에게 전달은 불가능함.

const Button = ({ text, color, children }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
