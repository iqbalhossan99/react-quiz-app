import illustrationLock from "../assets/Images/illustraton_lock.jpg";
import styles from "../styles/Illustration.module.css";

const Illustration = () => {
  return (
    <div className={styles.illustration}>
      <img src={illustrationLock} alt="Signup" />
    </div>
  );
};

export default Illustration;
