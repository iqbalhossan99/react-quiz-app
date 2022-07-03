import styles from "../styles/Question.module.css";
import Answers from "./Answers";

const Question = () => {
  return (
    <div className={styles.question}>
      <div className={styles.qTitle}>
        <span style={{ color: "#0A8BFE" }} className="material-icons-outlined">
          {" "}
          help_outline{" "}
        </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
};

export default Question;
