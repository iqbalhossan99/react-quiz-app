const CheckBox = ({ className, text, disabled, ...rest }) => {
  return (
    <label {...rest}>
      <button
        disabled={disabled}
        style={{ textAlign: "center" }}
        className={className}
      >
        {text}
      </button>
    </label>
  );
};

export default CheckBox;
