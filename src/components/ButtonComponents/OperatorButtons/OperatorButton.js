import React from "react";

const OperatorButton = (props) => {
  return (
    <button className={props}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props}
    </button>
  );
};

export default OperatorButton; 
