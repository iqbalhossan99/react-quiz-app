import Question from "../components/Question";
import styles from "../styles/Quiz.module.css";

const Quiz = () => {
  return (
    <>
      <div className={styles.quiz}>
        <h1 className={styles.quizTitle}>Quiz</h1>
        <h2>Fill out this quiz for improve your knowledge!</h2>
      </div>
      <Question />
    </>
  );
};

export default Quiz;
