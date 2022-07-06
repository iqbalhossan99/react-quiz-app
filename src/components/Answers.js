import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import CheckBox from "../components/CheckBox";
import auth from "../firebase.init";
import styles from "../styles/Answer.module.css";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

const Answers = ({
  options,
  correctAns,
  currentQuestion,
  questions,
  setCurrentQuestion,
}) => {
  const [user, loading, authError] = useAuthState(auth);
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [score, setScore] = useState(0);

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

  // skip the question
  const skip = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
      setSelected();
    }
  };

  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  const navigate = useNavigate();
  // submit quiz
  const submit = async () => {
    const participateData = { name: user.displayName, scores: score };
    // console.log(participateData);
    localStorage.setItem("participate", JSON.stringify(participateData));
    swal({
      title: "Data stored",
      icon: "success",
    });

    navigate("/result");
  };

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
        <Button style={{ width: "5%", background: "#F15454" }} onClick={skip}>
          <span>Skip</span>
        </Button>
      </div>
      <ProgressBar
        submit={submit}
        prevQuestion={prevQuestion}
        nextQuestion={nextQuestion}
        progress={percentage}
      />
    </>
  );
};

export default Answers;
