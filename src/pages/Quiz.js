// import ProgressBar from "../components/ProgressBar";

import Question from "../components/Question";
// import useQuestions from "../hooks/useQuestion";
import styles from "../styles/Quiz.module.css";

const Quiz = () => {
  // const [questions, loading] = useQuestions();
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // // handle nextQuestion button when user clicks the next button to get the next question
  // const nextQuestion = () => {
  //   if (currentQuestion + 1 < questions.length) {
  //     setCurrentQuestion((prevCurrent) => prevCurrent + 1);
  //     // setSelected();
  //   } else {
  //     swal({
  //       title: "Please select an option first",
  //       icon: "error",
  //     });
  //   }
  // };

  // if (currQues > 8) {
  //   history.push("/result");
  // } else if (selected) {
  //   setCurrQues(currQues + 1);
  //   setSelected();
  // } else setError("Please select an option first");

  // handle prevQuestion button when user clicks the prev button to get back to the previous question
  // const prevQuestion = () => {
  //   if (currentQuestion >= 1 && currentQuestion <= questions.length) {
  //     setCurrentQuestion((prevCurrent) => prevCurrent - 1);
  //   }
  // };
  return (
    <>
      <div className={styles.quiz}>
        <h1 className={styles.quizTitle}>Quiz</h1>
        <h2>Fill out this quiz for improve your knowledge!</h2>
      </div>
      <Question />
      {/* <ProgressBar prevQuestion={prevQuestion} nextQuestion={nextQuestion} /> */}
    </>
  );
};

export default Quiz;
