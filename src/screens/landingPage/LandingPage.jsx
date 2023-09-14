import React, { useState } from "react";
import { motion } from "framer-motion";
import lawyerdiary from "../../assets/lawyerdiary.png";
import LoginPage from "../../components/LoginPage/LoginPage";
import Signup from "../../components/SigupPage/Signup";
import "./Landingpage.css";
import style from "../../styles";
const LandingPage = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-container">
        <motion.div
          // animate={{ scale: [1, 1.02, 1] }}
          whileHover={{ scale: 1.02 }}
          className="landing-page-left-panel"
        >
          <img src={lawyerdiary} alt="advocatesdiary" />
        </motion.div>
        <div className="landing-page-right-panel">
          {signUp ? (
            <Signup setSignUp={setSignUp} />
          ) : (
            <LoginPage setSignUp={setSignUp} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
