import resultImg from "../assets/Images/resultImg.png";
import Question from "../components/Question";
import styles from "../styles/Result.module.css";

const Result = () => {
  return (
    <div>
      <div className={styles.summary}>
        <div className={styles.point}>
          <p className={styles.score}>
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className={styles.badge}>
          <img src={resultImg} alt="Success" />
        </div>
      </div>

      <div className={styles.analysis}>
        <h1>Question Analysis</h1>
        <h4>You answerd 5 out of 10 questions correctly</h4>
        <Question />
      </div>
    </div>
  );
};

export default Result;
