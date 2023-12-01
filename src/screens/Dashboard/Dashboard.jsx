import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import CaseCard from "../../casesCard/CaseCard";
import { caseList } from "../../data";

//actions functions for redux
import { increment } from "../../store/slices/exampleSlice";
import { collectPage } from "../../store/slices/casesSlice";
import SimpleCard from "../../components/SimpleCard/SimpleCard";
const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.counter;
  });
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    dispatch(collectPage("dashboard"));
  }, []);
  const handleAllcaseButton = () => {
    console.log("ping handleAllcaseButton");
    dispatch(increment());
  };
  const handleAddNewCase = () => {
    dispatch(collectPage("addCase"));
    navigate("/addcase");
  };

  console.log("selectedDate", caseList);
  return (
    <div className="dashboard-container">
      <div className="Calender-container">
        <div className="calender-div">
          <Calendar
            // defaultActiveStartDate={selectedDate}
            value={selectedDate}
            onChange={(event) => {
              console.log("selected onChange", event, "hehe", event.value);
              setSelectedDate(event);
            }}
          />
          <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="ldButton"
              style={{ width: 250 }}
              onClick={() => handleAddNewCase()}
            >
              ADD NEW CASE
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="ldButton"
              style={{ width: 250 }}
              onClick={() => {
                handleAllcaseButton();
              }}
            >
              SHOW ALL CASES {data.value}
            </motion.button>
          </div>
        </div>

        <div className="calender-side-panel">
          <div className="case-summary-container">
            {/* <h4>Case Summary:</h4> */}
            <div>
              <span>
                <SimpleCard Title="Todays" Value="9" />
              </span>
              <span>
                <SimpleCard Title="Tomorrow" Value="100" />{" "}
              </span>
            </div>
            <div>
              <span>
                <SimpleCard Title="Total" Value="160" />{" "}
              </span>
              <span>
                <SimpleCard Title="Disposed" Value="45" />
              </span>
            </div>
          </div>
          
        </div>
      </div>
      <div className="cases-container">
        <p style={{ fontWeight: "bolder", alignSelf: "center" }}>
          Selected Date: {selectedDate.getDate()}/{selectedDate.getMonth()}/
          {selectedDate.getFullYear()}
        </p>
        <CaseCard />
      </div>
    </div>
  );
};

export default Dashboard;
