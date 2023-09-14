import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "../../styles";

const Signup = ({ setSignUp }) => {
  const [showPassword, setShowPassword] = useState("password");
  return (
    <div className="login-container">
      <span style={style.headingText}>Signup</span>
      <div className="form-container">
        <div className="ldinput">
          <input type="text" placeholder="Name" style={{ width: "100%" }} />
        </div>
        <div className="ldinput">
          <input
            type="email"
            placeholder="Email"
            autocomplete="off"
            style={{ width: "100%" }}
          />
        </div>
        <div className="ldinput">
          <input
            type="tel"
            placeholder="PhoneNumber"
            style={{ width: "100%" }}
          />
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
            autocomplete="off"
          >
            {showPassword === "password" ? "Show" : "Hide"}
          </button>
        </div>

        <motion.button
          //   animate={{ scale: [1, 1.2, 1] }}

          whileHover={{ scale: 1.02 }}
          className="ldButton"
        >
          SignUp
        </motion.button>
      </div>
      <div style={{ marginTop: 20 }}>
        <span>
          Already have an <span>Account</span> ? &nbsp;{" "}
          <span
            style={{ fontWeight: "bolder", cursor: "pointer" }}
            onClick={() => setSignUp(false)}
          >
            Login
          </span>
        </span>
      </div>
    </div>
  );
};

export default Signup;
