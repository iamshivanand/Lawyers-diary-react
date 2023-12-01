//write all the generic function here

//function that genrate the classes accordint to the breakpoints

const breakpoints = {
  small: 1000,
};
const classesGenrator = (width) => {
  if (width <= breakpoints.small) return "small-screen";
};
const templateObject = [
  {
    label: "Case Title",
    type: "text",
    name: "caseTitle",
  },
  {
    label: "Case Type",
    type: "text",
    name: "caseType",
    required: true,
  },
  {
    label: "Court Name",
    type: "text",
    name: "courtName",
    required: true,
  },
  {
    label: "Case No",
    type: "text",
    name: "caseNo",
  },
  {
    label: "On behalf of",
    type: "text",
    name: "onBehalfOf",
  },
  {
    label: "Party/client Name",
    type: "text",
    name: "PartyName",
    required: true,
  },
  {
    label: "Contact No",
    type: "tel",
    name: "contactNo",
  },
  {
    label: "Opposite Party Names",
    type: "text",
    name: "oppositePartyNames",
    required: true,
  },
  {
    label: "Adversary Advocate",
    type: "text",
    name: "adversaryAdvocate",
  },
  {
    label: "Under Section",
    type: "text",
    name: "underSection",
    required: true,
  },
  {
    label: "Police Station(PS)",
    type: "text",
    name: "policeStation",
  },
  {
    label: "Address",
    type: "text",
    name: "address",
  },
  {
    label: "Date Of Filing",
    type: "date",
    name: "dateOfFiling",
  },
  {
    label: "Previous Date",
    type: "date",
    name: "previousDate",
  },
  {
    label: "Date Of Next Hearing",
    type: "date",
    name: "dateOfNextHearing",
  },
  {
    label: "Status",
    type: "text",
    name: "status",
  },
  {
    label: "List of witnesses",
    type: "text",
    name: "listOfWitnesses",
  },
  {
    label: "List of documents",
    type: "text",
    name: "listOfDocuments",
  },
];
export { classesGenrator, templateObject };

// Here is a list of the fields required in making a case diary for lawyers in India, according to the type of lawyer:

// Civil Lawyers

// Case number
// Court name
// Client name
// Opposite party name
// Cause of action
// Relief sought
// Date of filing
// Date of next hearing
// Status of the case
// Notes on any important events or developments in the case
// List of witnesses
// List of documents
// Criminal Lawyers

// Case number
// Court name
// Client name
// Accused name
// Charge(s)
// Date of arrest
// Date of bail
// Date of next hearing
// Status of the case
// Notes on any important events or developments in the case
// List of witnesses
// List of documents
// Revenue Lawyers

// Case number
// Court name
// Client name
// Opposite party name
// Subject matter of the case (e.g., property tax, income tax, customs duty)
// Date of filing
// Date of next hearing
// Status of the case
// Notes on any important events or developments in the case
// List of witnesses
// List of documents

// Template for Case Diary

// The following is a template for a case diary that can be used by lawyers in India, regardless of their area of practice:

// Case Number:
// Court Name:
// Client Name:
// Opposite Party Name:
// Cause of Action/Subject Matter:
// Relief Sought:
// Date of Filing:
// Date of Next Hearing:
// Status of the Case:
// Notes:
// List of Witnesses:
// List of Documents:
