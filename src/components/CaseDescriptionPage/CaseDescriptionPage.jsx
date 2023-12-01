import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { templateObject } from "../../utils";
import "./CaseDescriptionPage.css";
import { collectPage } from "../../store/slices/casesSlice";
const caseDescriptionPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cases.currentCase);
  useEffect(() => {
    dispatch(collectPage("description"));
  }, []);
  console.log("current selected Case", data);
  return (
    <div className="case-description-wrapper">
      {Object.keys(data)?.map(
        (key, index) =>
          key != "_id" && (
            <motion.div
              key={index}
              className="single-description-unit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {templateObject.map(
                (each, index) =>
                  each?.name === key && (
                    <span className="description-heading" key={index}>
                      {each?.label} :{" "}
                    </span>
                  )
              )}
              <span className="description-details">{data[key]}</span>
            </motion.div>
          )
      )}
    </div>
  );
};

export default caseDescriptionPage;
