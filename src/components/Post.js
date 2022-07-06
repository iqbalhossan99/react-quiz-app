import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/Images/javascript.webp";
import styles from "../styles/Post.module.css";

const Post = () => {
  const [error, setError] = useState(false);

  const handleClick = () => {
    try {
      // Do something that could throw
    } catch (error) {
      setError(true);
    }
  };
  return (
    <Link to="/quiz" onClick={handleClick}>
      <div className={styles.post}>
        <img src={image} alt="Video Title" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={styles.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
