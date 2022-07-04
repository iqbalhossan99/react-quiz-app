import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import logo from "../assets/Images/logo.svg";
import auth from "../firebase.init";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    swal({
      title: error?.message,
      icon: "error",
    });
  }
  const logout = async (e) => {
    e.preventDefault();
    await signOut(auth);
    await swal({
      title: error?.message,
      icon: "error",
    });
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="ThriveEdtech Logo" />
          </Link>
        </li>
      </ul>

      {/* ACCOUNT */}
      <div className={styles.account}>
        {user ? (
          <>
            <span
              style={{ color: "#0A8BFE" }}
              className="material-icons-outlined"
              title="Account"
            >
              account_circle
            </span>
            <span style={{ color: "#0A8BFE" }}>{user?.displayName}</span>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={logout}
            >
              <span className="material-icons-outlined" title="Logout">
                logout
              </span>
              Log Out
            </p>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>/<Link to="/login">Login</Link>
          </>
        )}{" "}
      </div>
    </nav>
  );
};

export default Nav;
