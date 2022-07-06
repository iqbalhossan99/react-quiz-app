import { useState } from "react";
import swal from "sweetalert";
import CheckBox from "../components/CheckBox";
import styles from "../styles/Answer.module.css";
import ProgressBar from "./ProgressBar";

const Answers = ({
  options,
  correctAns,
  currentQuestion,
  questions,
  setCurrentQuestion,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const [score, setScore] = useState(0);

  console.log(correctAns);
  const handleSelect = (i) => {
    if (selected === i && selected === correctAns) return `${styles.correct}`;
    else if (selected === i && selected !== correctAns)
      return `${styles.wrong}`;
    else if (i === correctAns) return `${styles.correct}`;
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correctAns) setScore(score + 1);
    setError(false);
  };
  // handle nextQuestion button when user clicks the next button to get the next question
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length && selected) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
      setSelected();
    } else {
      swal({
        title: "Please select an option first",
        icon: "error",
      });
    }
  };

  // handle prevQuestion button when user clicks the prev button to get back to the previous question
  const prevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  };

  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  return (
    <>
      <div className={styles.answers}>
        {options?.map((op) => (
          <CheckBox
            key={op}
            className={`${styles.answer}  ${selected && handleSelect(op)}`}
            onClick={() => handleCheck(op)}
            disabled={selected}
            text={op}
          />
        ))}
      </div>
      <ProgressBar
        prevQuestion={prevQuestion}
        nextQuestion={nextQuestion}
        percentage={percentage}
      />
    </>
  );
};

export default Answers;
