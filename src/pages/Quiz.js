import Answers from "../components/Answers";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Quiz.module.css";

const Quiz = () => {
  return (
    <>
      <div className="quiz">
        <h1 className={styles.quizTitle}>Quiz</h1>
        <h2>Fill out this quiz for improve your knowledge!</h2>
      </div>
      <Answers />
      <ProgressBar />
    </>
  );
};

export default Quiz;
