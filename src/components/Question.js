import { useEffect, useState } from "react";
import useQuestions from "../hooks/useQuestion";
import styles from "../styles/Question.module.css";
import Answers from "./Answers";
// import ProgressBar from "./ProgressBar";

const Question = () => {
  const [questions, loading] = useQuestions();
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const correctAns = questions[currentQuestion]?.correct_answer;
  console.log(correctAns);
  useEffect(() => {
    if (loading) {
      return;
    }
    const getQuestion =
      questions &&
      handleShuffle([
        questions[currentQuestion]?.correct_answer,
        ...questions[currentQuestion]?.incorrect_answers,
      ]);
    setOptions(getQuestion);
  }, [currentQuestion, questions]);

  const handleShuffle = (options) => {
    return options?.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <div className={styles.question}>
        <div className={styles.qTitle}>
          <span
            style={{ color: "#0A8BFE" }}
            className="material-icons-outlined"
          >
            help_outline
          </span>
          <h3>{questions[currentQuestion]?.question}</h3>
        </div>
        <Answers
          options={options}
          correctAns={correctAns}
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      </div>
    </>
  );
};

export default Question;
