import styles from "../styles/ProgressBar.module.css";
import Button from "./Button";
const ProgressBar = ({ prevQuestion, nextQuestion, progress, submit }) => {
  return (
    <div className={styles.progressBar}>
      <div onClick={prevQuestion} className={styles.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.rangeBody}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <Button onClick={progress === 100 ? submit : nextQuestion}>
        <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
