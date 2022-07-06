import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Illustration from "../components/Illustration";
import InputText from "../components/InputText";
import auth from "../firebase.init";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const navigate = useNavigate();

  // FIREBASE AUTHENTICATION
  // CREATE USER WITH EMAIL AND PASSWORD
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // SEND EMAIL VERIFICATION
  const [sendEmailVerification, verificationSending, verificationError] =
    useSendEmailVerification(auth);

  // UPDATE PROFILE
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  // LOADING
  if (loading || verificationSending || updating) {
    <p>Loading...</p>;
  }

  if (error || verificationError || updatingError) {
    swal({
      title: error?.message,
      icon: "error",
    });
  }

  // handle signUp btn
  const handleSingUpBtn = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return swal({
        title: "Password doesn't match!",
        icon: "error",
      });
    }

    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    await updateProfile({ displayName: userName });

    await swal({
      title: "User Created",
      icon: "success",
    });
  };

  if (user) {
    navigate("/");
  }

  return (
    <>
      <h1 className="pageTitle">Create a new account!</h1>
      <div className="column">
        <Illustration />
        <form onSubmit={handleSingUpBtn}>
          <InputText
            type="text"
            placeholder="Enter name"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
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
          <InputText
            type="password"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <CheckBox
            text="I agree to the Terms &amp; Conditions"
            required
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
          />
          <Button>
            <span>Sign Up</span>
          </Button>
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
