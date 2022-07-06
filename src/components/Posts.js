import styles from "../styles/Posts.module.css";
import Post from "./Post";

const Posts = () => {
  return (
    <div className={styles.Posts}>
      <Post />
    </div>
  );
};

export default Posts;
