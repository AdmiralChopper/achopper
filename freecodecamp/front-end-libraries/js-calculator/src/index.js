import React from "react";
import ReactDOM from "react-dom";
import SimpleCalculator from "./SimpleCalculator";

const App = () => {
  return (
    <div className="container">
      <SimpleCalculator />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
