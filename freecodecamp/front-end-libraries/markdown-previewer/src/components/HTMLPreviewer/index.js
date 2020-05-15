import React from "react";
import "./styles.css";

class HTMLPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.previewerRef = React.createRef();
  }

  componentDidMount() {
    this.previewerRef.current.innerHTML = this.props.HTMLToShow;
  }

  componentDidUpdate() {
    this.previewerRef.current.innerHTML = this.props.HTMLToShow;
  }

  render() {
    return <div className="preview" id="preview" ref={this.previewerRef}></div>;
  }
}

export default HTMLPreviewer;
