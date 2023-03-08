import React from "react";
import '../Styles/Button.css'

function Button({ text, isClickButton, manejarClick }) {
  return (
    <button className={ isClickButton ? "click-button" : "reset-button" }
    onClick={manejarClick}>
      {text}
    </button>
  );
}
export default Button;
