import React, { useState } from "react";
import "./LoginPage.css";
import style from "../../styles";
import { motion } from "framer-motion";
const LoginPage = ({ setSignUp }) => {
  const [showPassword, setShowPassword] = useState("password");
  return (
    <div className="login-container">
      <span style={style.headingText}>Login</span>

      {/* //login using email */}
      <div className="form-container">
        <div className="ldinput">
          <input type="email" placeholder="Email" style={{ width: "100%" }} />
        </div>
        <div className="ldinput">
          <input
            type={`${showPassword}`}
            placeholder="Password"
            style={{ width: "89%" }}
          />
          <button
            className="show-password"
            style={{ width: "10%" }}
            onClick={() => {
              if (showPassword === "password") {
                setShowPassword("text");
              } else {
                setShowPassword("password");
              }
            }}
          >
            {showPassword === "password" ? "Show" : "Hide"}
          </button>
        </div>
        <motion.button
          //   animate={{ scale: [1, 1.2, 1] }}

          whileHover={{ scale: 1.02 }}
          className="ldButton"
        >
          Login
        </motion.button>
      </div>
      <div style={{ marginTop: 20 }}>
        <span>
          Don't have an <span>Account</span> ? &nbsp;{" "}
          <span
            style={{ fontWeight: "bolder", cursor: "pointer" }}
            onClick={() => setSignUp(true)}
          >
            Signup
          </span>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
