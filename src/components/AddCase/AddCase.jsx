import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import("./AddCase.css");
import LDInputField from "../LDInputField/LDInputField";
import { motion } from "framer-motion";
import { caseList } from "../../data";
import { templateObject } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import { addCase, collectPage, editCase } from "../../store/slices/casesSlice";
import { v4 as uuidv4 } from "uuid";
import { addCaseValidator } from "../../validation";
const AddCase = () => {
  //add the templates for diffrent kinds of cases like civil ,criminal, revenue,incometax
  //Notes on any important events or developments in the case
  //List of witnesses
  //List of documents
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cases);
  const currentPage = data.currentPage;

  console.log("AddCase Data", data);
  const [error, setError] = useState(false);
  const [newCase, setNewCase] = useState(
    (currentPage === "editPage" && data?.currentCase) || {
      caseTitle: "",
      courtName: "",
      caseNo: "",
      caseType: "",
      onBehalfOf: "",
      PartyName: "",
      oppositePartyNames: "",
      contactNo: "",
      adversaryAdvocate: "",
      underSection: "",
      policeStation: "",
      address: "",
      dateOfFiling: "",
      previousDate: "",
      dateOfNextHearing: "",
      status: "",
      listOfWitnesses: "",
      listOfDocuments: "",
    }
  );
  // console.log("newcase value", newCase);
  // useEffect(() => {
  //   dispatch(collectPage("addcases"));
  // }, []);

  const notify = () => toast.error("Add the required fields!");
  const handleAddCase = () => {
    console.log("case Data", newCase);
    if (addCaseValidator(newCase)) {
      if (currentPage === "editPage") {
        dispatch(editCase(newCase));
      }
      dispatch(addCase({ _id: uuidv4(), ...newCase }));
      dispatch(collectPage("dashboard"));
      navigate("/dashboard");
    } else {
      //trow an error
      setError(true);
      notify();
      console.log("hello throwing error ");
    }
  };
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setNewCase({ ...newCase, [name]: value });
    // if(addCaseValidator(newCase)){

    // }
    // console.log("target input", e.target.name, " : ", e.target.value);
  };

  return (
    <div>
      <h1>{currentPage === "editPage" ? "Edit Case" : "Add New Case"}</h1>
      <div className="add-new-case-form">
        {templateObject.map((each, index) => (
          <LDInputField
            obj={each}
            key={index}
            handleinput={handleInputChange}
            error={error}
            currentPage={currentPage}
            inputValue={newCase[each?.name]}
          />
        ))}

        <motion.button
          whileHover={{ scale: 1.02 }}
          className="ldButton"
          style={{ width: 150, margin: 20 }}
          onClick={() => {
            handleAddCase();
          }}
        >
          Save
        </motion.button>
      </div>
    </div>
  );
};

export default AddCase;
