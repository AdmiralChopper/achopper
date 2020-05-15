import React from "react";
import "./styles.css";
import DivExpandButton from "../DivExpandButton";

const TopBar = ({
  text,
  icon,
  toShrink,
  toExpand,
  isExpanded,
  setExpanded,
}) => {
  return (
    <div className="top-bar">
      <i className={`icon ${icon}`} />
      {text}
      <DivExpandButton
        toShrink={toShrink}
        toExpand={toExpand}
        isExpanded={isExpanded}
        setExpanded={setExpanded}
      />
    </div>
  );
};

export default TopBar;
