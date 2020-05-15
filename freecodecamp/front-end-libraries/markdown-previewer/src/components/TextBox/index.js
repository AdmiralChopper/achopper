import React from "react";
import "./styles.css";

const TextBox = (props) => {
  return (
    <textarea
      id={props.id}
      value={props.text}
      onChange={props.onEditorUpdate}
      type="text"
    />
  );
};

export default TextBox;
