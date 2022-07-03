import Answers from "../components/Answers";
import ProgressBar from "../components/ProgressBar";

const Quiz = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "800",
            color: "#0A8BFE",
            marginBottom: "10px",
          }}
        >
          Quiz
        </h1>
        <h2>Fill out this quiz for improve your knowledge!</h2>
      </div>
      <Answers />
      <ProgressBar />
    </>
  );
};

export default Quiz;
