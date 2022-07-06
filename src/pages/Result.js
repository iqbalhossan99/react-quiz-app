import resultImg from "../assets/Images/resultImg.png";
import useQuestions from "../hooks/useQuestion";
import styles from "../styles/Result.module.css";

const Result = () => {
  const participateData = JSON.parse(localStorage.getItem("participate"));
  const [questions] = useQuestions();
  console.log(participateData);
  return (
    <div>
      <div className={styles.summary}>
        <div className={styles.point}>
          <p className={styles.score}>
            Your score is <br />
            {participateData.scores} out of {questions.length}
          </p>
        </div>

        <div className={styles.badge}>
          <img src={resultImg} alt="Success" />
        </div>
      </div>

      {/* <div className={styles.analysis}>
        <h1>Question Analysis</h1>
        <h4>You answerd 5 out of 10 questions correctly</h4>
        <Question />
      </div> */}
    </div>
  );
};

export default Result;
