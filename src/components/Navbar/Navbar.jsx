import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import { editCase, collectPage } from "../../store/slices/casesSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const casesAlldata = useSelector((state) => state.cases);
  const data = casesAlldata?.currentPage;
  const currentCaseData = casesAlldata?.currentCase;
  const handleCaseEdit = () => {
    //send the dispatch that page is changed
    dispatch(editCase(currentCaseData));
    dispatch(collectPage("editPage"));
    navigate("/addcase");
  };
  console.log("NavbarData", data);
  return (
    <div className="navbar-container flex-row-center">
      {data === "description" ? (
        <div className="navbar-buttons-container">
          <motion.button
            // whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.02 }}
            className="navbar-buttons"
            onClick={() => handleCaseEdit()}
          >
            EDIT
          </motion.button>
        </div>
      ) : (
        <div className="logo-container">
          <span style={{ marginLeft: "20px" }}>Lawyer's Diary</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
