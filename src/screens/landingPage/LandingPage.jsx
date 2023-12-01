import React, { useState } from "react";
import { motion } from "framer-motion";
import lawyerdiary from "../../assets/lawyerdiary.png";
import LoginPage from "../../components/LoginPage/LoginPage";
import Signup from "../../components/SigupPage/Signup";
import "./Landingpage.css";
import style from "../../styles";
import { classesGenrator } from "../../utils";
const LandingPage = ({ width }) => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="landing-page-wrapper ">
      <div className={`landing-page-container `}>
        <motion.div
          // animate={{ scale: [1, 1.02, 1] }}
          whileHover={{ scale: 1.01 }}
          className={`landing-page-left-panel flex-row-center ${classesGenrator(
            width
          )}`}
          style={width <= 1000 ? { display: "none" } : {}}
        >
          <img src={lawyerdiary} alt="advocatesdiary" />
        </motion.div>
        <div className={`landing-page-right-panel ${classesGenrator(width)}`}>
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
