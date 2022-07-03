import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Illustration from "../components/Illustration";
import InputText from "../components/InputText";

const SignUp = () => {
  return (
    <>
      <h1 className="pageTitle">Create a new account!</h1>
      <div className="column">
        <Illustration />
        <form style={{ height: "500px" }}>
          <InputText type="text" placeholder="Enter name" required />
          <InputText type="text" required placeholder="Enter email" s />
          <InputText type="password" required placeholder="Enter password" />
          <InputText type="password" required placeholder="Confirm password" />
          <CheckBox required text="I agree to the Terms &amp; Conditions" />
          <Button type="submit">
            <span>Sign Up</span>
          </Button>
          <div className="info">
            Already have an account? <a href="/login">Login</a> instead.
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
