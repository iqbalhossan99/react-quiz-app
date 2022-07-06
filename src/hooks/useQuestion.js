import { useEffect, useState } from "react";
import swal from "sweetalert";

const useQuestions = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=3")
      .then((res) => res.json())
      .then((data) => {
        setError(false);
        setLoading(true);
        setQuestions(data?.results);
        // console.log(data.results);
        setLoading(false);
      })
      .catch((err) => {
        swal({
          title: error?.message,
          icon: "error",
        });
        setLoading(false);
        setError(true);
      });
  }, []);

  return [questions, loading, error];
};

export default useQuestions;
