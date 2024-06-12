import React from "react";

function MyButton({ tarea, click, children }) {
    return (
      <button className={task} onClick={click}>
        {" "}
        {children}
      </button>
    );
  }
  
  export default MyButton;
