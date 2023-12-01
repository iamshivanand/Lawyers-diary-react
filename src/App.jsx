import { useEffect, useState } from "react";
import LandingPage from "./screens/landingPage/LandingPage";
import Dashboard from "./screens/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import CaseHistoryPage from "./components/CaseHistoryPage/CaseHistoryPage";
import CaseDescriptionPage from "./components/CaseDescriptionPage/CaseDescriptionPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { classesGenrator } from "./utils";
import AddCase from "./components/AddCase/AddCase";
function App() {
  const [count, setCount] = useState(0);
  const [width, setWindowWidth] = useState("1024");
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("width", width);
  return (
    <div className="app">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage width={width} />} />
          <Route path="/dashboard" element={<Dashboard width={width} />} />
          <Route path="/addcase" element={<AddCase />} />
          <Route path="/description" element={<CaseDescriptionPage />} />
          <Route path="/history" element={<CaseHistoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
