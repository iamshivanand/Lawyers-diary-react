import React, { useEffect, useState } from "react";

import "./LDInputField.css";
import { motion } from "framer-motion";
const LDInputField = ({ obj, handleinput, error, currentPage, inputValue }) => {
  // console.log("each of object", obj);
  console.log("inputvalue is ", inputValue);
  const [value, setValue] = useState(inputValue);
  const [showError, setShowError] = useState(false);
  console.log("hello value", value);
  useEffect(() => {
    setShowError(error && obj?.required);
  }, [error]);
  return (
    <motion.div
      className="form-add-case-input"
      initial={{ opacity: currentPage === "editPage" ? 0 : "" }}
      animate={{ opacity: currentPage === "editPage" ? 1 : "" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* <label>{obj.label}:</label> */}

      <input
        type={obj.type}
        placeholder={obj.label}
        name={obj.name}
        value={value}
        onChange={(e) => {
          handleinput(e);
          setValue(e.target.value);
          if (e.target.value === "" && error && obj?.required) {
            setShowError(true);
          } else {
            setShowError(false);
          }
        }}
        required={obj?.required}
        className={showError ? " ldinputField error" : "ldinputField"}
      />
      <motion.span
        initial={{ y: 20 }}
        animate={{ y: value || obj.type === "date" ? 0 : 20 }}
        transition={{ duration: 0.1 }}
        className={
          value || obj.type === "date"
            ? `input-label-span ${showError ? "error-span" : ""}`
            : "display-none"
        }
      >
        {obj.label}
      </motion.span>
    </motion.div>
  );
};

export default LDInputField;
