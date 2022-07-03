import Button from "../components/Button";
import Illustration from "../components/Illustration";
import InputText from "../components/InputText";
const Login = () => {
  return (
    <>
      <h1 className="pageTitle">Login to your account</h1>
      <div className="column">
        <Illustration />
        <form>
          <InputText type="text" placeholder="Enter email" required />
          <InputText type="password" placeholder="Enter password" required />
          <Button type="submit">
            <span>Sign Up</span>
          </Button>
          <div className="info">
            Create a new account? <a href="/signup">Sign Up</a> instead.
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
