import styles from "../styles/ProgressBar.module.css";
import Button from "./Button";
const ProgressBar = ({ prevQuestion, nextQuestion, percentage }) => {
  return (
    <div className={styles.progressBar}>
      <div onClick={prevQuestion} className={styles.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.rangeBody}>
          <div
            className={styles.progress}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <Button onClick={() => nextQuestion()}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
