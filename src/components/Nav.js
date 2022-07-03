import logo from "../assets/Images/logo.svg";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="index.html" className={styles.brand}>
            <img src={logo} alt="ThriveEdtech Logo" />
          </a>
        </li>
      </ul>
      <div className={styles.account}>
        <a className={styles.signInSingUp} href="signup.html">
          SignIn/SignUp
        </a>
      </div>
    </nav>
  );
};

export default Nav;
