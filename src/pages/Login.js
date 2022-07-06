import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Button from "../components/Button";
import Illustration from "../components/Illustration";
import InputText from "../components/InputText";
import auth from "../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // LOADING
  if (loading) {
    <p>Loading...</p>;
  }

  if (error) {
    swal({
      title: error?.message,
      icon: "error",
    });
  }

  // handle Login btn
  const handleLoginBtn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(email, password);

    await swal({
      title: "You are loged In now!",
      icon: "success",
    });

    await navigate(from, { replace: true });
  };

  return (
    <>
      <h1 className="pageTitle">Login to your account</h1>
      <div className="column">
        <Illustration />
        <form onSubmit={handleLoginBtn}>
          <InputText
            type="text"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputText
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>
            <span>Log In</span>
          </Button>
          <div className="info">
            Create a new account? <Link to="/signup">Sign Up</Link> instead.
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
