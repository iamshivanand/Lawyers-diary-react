import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { showCurrentCase } from "../store/slices/casesSlice";
import { useNavigate } from "react-router-dom";
import "./CaseCard.css";
const CaseCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cases);

  const handleCaseClick = (data) => {
    dispatch(showCurrentCase(data));

    navigate("/description");
  };
  console.log("cases card", data);
  return (
    <div className="case-card-container">
      {data?.allCases?.map((each, index) => (
        <motion.div
          className="case-card"
          key={each._id}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: index * 0.5, ease: "easeInOut" }}
          onClick={() => {
            handleCaseClick(each);
          }}
        >
          <p>
            <span>Case Title:</span>
            {each?.caseTitle}
          </p>
          <p>
            <span>Court Name:</span>&nbsp;{each?.courtName}
          </p>
          <p>
            <span>Case No:</span>
            {each.caseNo}
          </p>
          <p>
            <span>Party Name:</span>
            {each.PartyName}
          </p>
          <p>
            <span>Previous Date:</span>
            {each.previousDate}
          </p>
          <p>
            <span>Next Hearing Date:</span>
            {each.dateOfNextHearing}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default CaseCard;
