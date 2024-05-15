import React from "react";

function MyButton({ sport, click, label }) {
    return (
      <button className={sport} onClick={click}>
        {" "}
        {label}
      </button>
    );
  }
  
  export default MyButton;
