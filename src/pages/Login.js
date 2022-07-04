import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
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

  // handle signUp btn
  const handleLoginBtn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(email, password);

    await swal({
      title: "You are loged In now!",
      icon: "success",
    });
  };

  if (user) {
    navigate("/");
  }

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
          <Button type="submit" value="Login" />
          <div className="info">
            Create a new account? <Link to="/signup">Sign Up</Link> instead.
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
