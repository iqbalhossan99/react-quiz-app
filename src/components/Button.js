import styles from "../styles/Button.module.css";

const Button = ({ className, children, ...rest }) => {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
