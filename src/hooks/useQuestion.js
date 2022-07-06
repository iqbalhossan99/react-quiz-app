import { useEffect, useState } from "react";
// let qs = [];

const useQuestions = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  console.log(questions);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((data) => {
        setError(false);
        setLoading(true);
        setQuestions(data?.results);
        // console.log(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, []);

  return [questions, loading, error];
};

export default useQuestions;
