import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Quiz from "../src/pages/Quiz";
import Result from "../src/pages/Result";
import SignUp from "../src/pages/SignUp";
import "./App.css";
import RequireAuth from "./Auth/RequireAuth";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/quiz"
            element={
              <RequireAuth>
                <Quiz />
              </RequireAuth>
            }
          />
          <Route
            path="/result"
            element={
              <RequireAuth>
                <Result />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
