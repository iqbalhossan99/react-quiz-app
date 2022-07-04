import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.svg";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="ThriveEdtech Logo" />
          </Link>
        </li>
      </ul>
      <div className={styles.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Nav;
