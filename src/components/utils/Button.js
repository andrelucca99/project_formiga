import React from 'react';
import "./button.css";

function Button({text}) {
  return (
    <div className="btn">{text}</div>
  );
}

export default Button;
