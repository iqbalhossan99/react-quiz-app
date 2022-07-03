import styles from "../styles/InputText.module.css";

const InputText = (props) => {
  return (
    <div className={styles.inputText}>
      <input {...props} />
    </div>
  );
};

export default InputText;
