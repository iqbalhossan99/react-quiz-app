import { useNavigate } from "react-router";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
const Home = () => {
  const navigate = useNavigate();
  const startQuiz = () => {
    navigate("/quiz");
  };
  return (
    <div className={styles.quizBtn}>
      <Button style={{ width: "20%" }} onClick={startQuiz}>
        <span>Take Quiz</span>
      </Button>
    </div>
  );
};

export default Home;
