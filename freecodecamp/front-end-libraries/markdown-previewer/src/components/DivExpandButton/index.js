import React from "react";
import "./styles.css";

class DivExpandButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIcon: "fa fa-arrows-h",
    };
  }

  switchExpanded = () => {
    const { toShrink, toExpand, isExpanded, setExpanded } = this.props;
    console.log(toShrink);
    if (!isExpanded) {
      toShrink.current.hidden = true;
      toShrink.current.style.display = "none";
      toShrink.current.style.width = "0";
      toExpand.current.style.width = "98vw";
      this.setState({ currentIcon: "fa fa-compress" });
    } else {
      toShrink.current.hidden = false;
      toShrink.current.style.display = "flex";
      toShrink.current.style.width = "48vw";
      toExpand.current.style.width = "48vw";
      this.setState({ currentIcon: "fa fa-arrows-h" });
    }
    setExpanded();
  };

  render() {
    return (
      <button onClick={this.switchExpanded}>
        <i className={this.state.currentIcon} />
      </button>
    );
  }
}

export default DivExpandButton;
