import "./App.css";
import AuthForm from "./Components/AuthForm";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Creator from "./Pages/Creator";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="signup" element={<AuthForm mode="signup" />} />
          <Route path="/login" element={<AuthForm mode="login" />} />
          <Route path="/reset-password" element={<AuthForm mode="reset" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
