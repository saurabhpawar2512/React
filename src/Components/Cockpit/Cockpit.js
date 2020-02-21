import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.module.css";
// import styled from "styled-components";

// const StyledButton = styled.button`
//   background-color: ${props => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

const Cockpit = props => {
  const toggleButtonRef = useRef(null);
  useEffect(() => {
    console.log("[Cockpit.js] UseEffect");
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleaning work using UseEffect");
    };
  }, []);
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      {/* <StyledButton alt={props.showPersons} onClick={props.clicked}>
        Toggle Persons
      </StyledButton> */}
    </div>
  );
};

export default React.memo(Cockpit);
