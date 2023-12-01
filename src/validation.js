//here we are going to validate if the object that we are receiving from the add form if it is valid or not

const addCaseValidator = (caseData) => {
  //mention the required fields
  //CaseTitle,CaseType,PartyName,oppositePartyName
  //   console.log("validation function", caseData);
  let v1 = validateCourtName(caseData);
  let v2 = validateCaseType(caseData);
  let v3 = validatePartyName(caseData);
  let v4 = validateOppositePartName(caseData);
  let v5 = validateUnderSection(caseData);
  console.log("validation function", v1, v2, v3, v4, v5);
  return v1 && v2 && v3 && v4 && v5;
};
const validateCourtName = (caseData) => {
  if (!caseData.hasOwnProperty("courtName") || caseData.courtName === "") {
    return false;
  } else {
    return true;
  }
};
const validateCaseType = (caseData) => {
  if (!caseData.hasOwnProperty("caseType") || caseData.caseType === "") {
    return false;
  } else {
    return true;
  }
};
const validatePartyName = (caseData) => {
  if (!caseData.hasOwnProperty("PartyName") || caseData.PartyName === "") {
    return false;
  } else {
    return true;
  }
};
const validateOppositePartName = (caseData) => {
  if (
    !caseData.hasOwnProperty("oppositePartyNames") ||
    caseData.oppositePartyNames === ""
  ) {
    return false;
  } else {
    return true;
  }
};
const validateUnderSection = (caseData) => {
  if (
    !caseData.hasOwnProperty("underSection") ||
    caseData.underSection === ""
  ) {
    return false;
  } else {
    return true;
  }
};
export { addCaseValidator };
