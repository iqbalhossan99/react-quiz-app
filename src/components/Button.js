import styles from "../styles/Button.module.css";

const Button = ({ className, ...rest }) => {
  return <input className={`${styles.button} ${className}`} {...rest} />;
};

export default Button;
