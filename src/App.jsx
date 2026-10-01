import "./App.css";
import Footer from "./Components/Common/Footer";
import Navigation from "./Components/Common/Navigation";
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
        </Routes>
      </main>
      
    </>
  );
}

export default App;
