import styles from "../styles/Answer.module.css";
import CheckBox from "./CheckBox";

const Answers = () => {
  return (
    <div className={styles.answers}>
      <CheckBox className={styles.answer} text="Test answer" />
    </div>
  );
};

export default Answers;
