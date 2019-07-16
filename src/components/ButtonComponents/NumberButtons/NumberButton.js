import React from "react";

import { useState } from "react"; 

// import Numbers from "./Numbers"; 

const NumberButton = (props) => {
  const [displayState, setDisplayState] = useState(props); 
  return (
    <button className="numbers">
      {/* Display a button element rendering the data being passed down from the parent container on props */props}
    </button>
  );
};

export default NumberButton; 
