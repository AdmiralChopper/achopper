import React, { Component } from "react";
import "./styles.css";

class SimpleCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      result: "",
      currentNumber: "",
      previousNumber: "",
      lastOperation: "",
      reset: false,
    };
  }

  handleButtonPress = async (event) => {
    event.persist();
    const {
      expression,
      previousNumber,
      currentNumber,
      lastOperation,
      reset,
    } = this.state;

    const val = event.target.innerHTML;

    if (reset && val.match("[.0-9]")) {
      const paddingZero = val.match("[.]") ? "0" : "";
      this.setState({
        expression: `${paddingZero}${val}`,
        result: `${paddingZero}${val}`,
        currentNumber: `${paddingZero}${val}`,
        previousNumber: "",
        lastOperation: "",
        reset: false,
      });
    } else if (reset) {
      this.setState({
        expression: `${currentNumber}${val}`,
        result: `${val}`,
        currentNumber: "",
        previousNumber: `${currentNumber}`,
        lastOperation: `${val}`,
        reset: false,
      });
    }

    if (!reset) {
      if (
        (currentNumber.match("\\.", "g") && val === ".") ||
        lastOperation === `${val}`
      ) {
        return;
      }

      if (currentNumber.match("^-*0$") && val === "0") return;
      if (expression.match("-$") && val === "-") return;
      if (expression.match("[X|/|+|-]+-*$") && val.match("[X|/|+]")) {
        this.setState({
          expression: expression.replace(/[X|/|+|-]+-*$/, `${val}`),
          result: `${val}`,
          lastOperation: `${val}`,
          currentNumber: "",
        });
        return;
      }

      if (expression.match("[X|/|+]+$") && val.match("-")) {
        this.setState({
          expression: `${expression}${val}`,
          result: `${currentNumber}${val}`,
          currentNumber: "-",
        });
        return;
      }

      if (
        currentNumber === "" &&
        previousNumber === "" &&
        !val.match("[0-9]")
      ) {
        if (val === "-") {
          this.setState({
            previousNumber: "0",
            currentNumber: "-",
            expression: `0${val}`,
            lastOperation: `${val}`,
          });
        } else if (val === ".") {
          this.setState({
            expression: `0${val}`,
            currentNumber: `0${val}`,
            result: `0${val}`,
          });
        } else {
          this.setState({
            previousNumber: "0",
            expression: `0${val}`,
            lastOperation: val,
            result: `${val}`,
          });
        }

        return;
      } else if (currentNumber.match("^-*0+$") && val.match(/[0-9]/)) {
        console.log(expression.replace(/^-*0+$/, val));
        this.setState({
          currentNumber: `${val}`,
          expression: expression.replace(/^-*0+$/, val),
          result: expression.replace(/^-*0+$/, val),
        });
        return;
      }

      this.setState({
        expression: `${expression}${val}`,
      });

      switch (val) {
        case "+":
        case "-":
        case "/":
        case "X":
          this.partialCalculation(
            previousNumber,
            currentNumber,
            lastOperation,
            val
          );
          break;
        default:
          this.setState({
            currentNumber: `${currentNumber}${val}`,
            result: `${currentNumber}${val}`,
          });
          break;
      }
    }
  };

  handleClear = () => {
    this.setState({
      expression: "",
      result: "0",
      currentNumber: "",
      previousNumber: "",
      lastOperation: "",
      reset: false,
    });
  };

  partialCalculation = (prevNumber, currentNumber, lastOperation, val) => {
    if (prevNumber === "") {
      this.setState({
        previousNumber: parseFloat(currentNumber),
        currentNumber: "",
        lastOperation: val,
        result: `${val}`,
      });
    } else {
      switch (lastOperation) {
        case "+":
          this.setState({
            previousNumber:
              (parseFloat(prevNumber) || 0) + (parseFloat(currentNumber) || 0),
            currentNumber: "",
            result: `${val}`,
            lastOperation: `${val}`,
          });
          break;
        case "-":
          this.setState({
            previousNumber:
              (parseFloat(prevNumber) || 0) -
              Math.abs(parseFloat(currentNumber) || 0),
            currentNumber: "",
            result: `${val}`,
            lastOperation: `${val}`,
          });
          break;
        case "X":
          this.setState({
            previousNumber:
              (parseFloat(prevNumber) || 0) * (parseFloat(currentNumber) || 0),
            currentNumber: "",
            result: `${val}`,
            lastOperation: `${val}`,
          });
          break;
        case "/":
          this.setState({
            previousNumber:
              (parseFloat(prevNumber) || 0) / (parseFloat(currentNumber) || 0),
            currentNumber: "",
            result: `${val}`,
            lastOperation: `${val}`,
          });
          break;
        default:
          break;
      }
    }
  };

  handleEquals = () => {
    const {
      expression,
      previousNumber,
      currentNumber,
      lastOperation,
    } = this.state;
    let res;
    switch (lastOperation) {
      case "+":
        res =
          (parseFloat(previousNumber) || 0) + (parseFloat(currentNumber) || 0);
        break;
      case "-":
        res =
          (parseFloat(previousNumber) || 0) -
          Math.abs(parseFloat(currentNumber) || 0);
        break;
      case "X":
        res =
          (parseFloat(previousNumber) || 0) * (parseFloat(currentNumber) || 0);
        break;
      case "/":
        res =
          (parseFloat(previousNumber) || 0) / (parseFloat(currentNumber) || 0);
        break;
      default:
        res = parseFloat(currentNumber) || "0";
        break;
    }
    if (!this.state.reset) {
      this.setState({
        expression: `${expression}=${res}`,
        result: `${res}`,
        previousNumber: "",
        currentNumber: `${res}`,
        lastOperation: "",
        reset: true,
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="simple-calculator">
          <div id="display" className="display">
            <p className="expression">{this.state.expression}</p>
            <p className="result">{this.state.result}</p>
          </div>

          <div className="button-container">
            <div className="row">
              <button id="clear" onClick={this.handleClear}>
                AC
              </button>
              <button
                className="operation-btn"
                id="divide"
                onClick={this.handleButtonPress}
              >
                /
              </button>
              <button
                className="operation-btn"
                id="multiply"
                onClick={this.handleButtonPress}
              >
                X
              </button>
            </div>

            <div className="row">
              <button
                className="digit-btn"
                id="seven"
                onClick={this.handleButtonPress}
              >
                7
              </button>
              <button
                className="digit-btn"
                id="eight"
                onClick={this.handleButtonPress}
              >
                8
              </button>
              <button
                className="digit-btn"
                id="nine"
                onClick={this.handleButtonPress}
              >
                9
              </button>
              <button
                className="operation-btn"
                id="subtract"
                onClick={this.handleButtonPress}
              >
                -
              </button>
            </div>

            <div className="row">
              <button
                className="digit-btn"
                id="four"
                onClick={this.handleButtonPress}
              >
                4
              </button>
              <button
                className="digit-btn"
                id="five"
                onClick={this.handleButtonPress}
              >
                5
              </button>
              <button
                className="digit-btn"
                id="six"
                onClick={this.handleButtonPress}
              >
                6
              </button>
              <button
                className="operation-btn"
                id="add"
                onClick={this.handleButtonPress}
              >
                +
              </button>
            </div>

            <div className="row">
              <button
                className="digit-btn"
                id="one"
                onClick={this.handleButtonPress}
              >
                1
              </button>
              <button
                className="digit-btn"
                id="two"
                onClick={this.handleButtonPress}
              >
                2
              </button>
              <button
                className="digit-btn"
                id="three"
                onClick={this.handleButtonPress}
              >
                3
              </button>
              <button id="equals" onClick={this.handleEquals}>
                =
              </button>
            </div>

            <div className="row">
              <button
                className="digit-btn"
                id="zero"
                onClick={this.handleButtonPress}
              >
                0
              </button>
              <button
                className="digit-btn"
                id="decimal"
                onClick={this.handleButtonPress}
              >
                .
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleCalculator;
