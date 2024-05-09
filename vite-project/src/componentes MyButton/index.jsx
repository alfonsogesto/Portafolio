import React, { useState } from "react";

function MyButton({ color, click, label }) {
  return (
    <button className={color} onClick={click}>
      {" "}
      {label}
    </button>
  );
}

export default MyButton;
