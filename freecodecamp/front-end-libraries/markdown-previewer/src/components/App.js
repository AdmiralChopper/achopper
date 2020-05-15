import React from "react";
import DOMPurify from "dompurify";
import TextBox from "./TextBox/index";
import HTMLPreviewer from "./HTMLPreviewer/index";
import TopBar from "./TopBar/index";
import defaultText from "../data/defaultText";
import "./appStyles.css";
const marked = require("marked");

//Copied that from the example
const renderer = new marked.Renderer();
renderer.link = function (href, _, text) {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
};

marked.setOptions({
  breaks: true,
  renderer: renderer,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: defaultText,
      isEditorExpanded: false,
      isPreviewerExpanded: false,
    };
    this.textEditorRef = React.createRef();
    this.previewerRef = React.createRef();
  }

  onEditorUpdate = (e) => {
    this.setState({ editorText: e.target.value });
  };

  setEditorExpanded = () => {
    this.setState({ isEditorExpanded: !this.state.isEditorExpanded });
  };

  setPreviewerExpanded = () => {
    this.setState({ isPreviewerExpanded: !this.state.isPreviewerExpanded });
  };

  render() {
    return (
      <div className="container">
        <div className="text-editor text-display" ref={this.textEditorRef}>
          <TopBar
            text="Editor"
            icon="fa fa-edit"
            toShrink={this.previewerRef}
            toExpand={this.textEditorRef}
            isExpanded={this.state.isEditorExpanded}
            setExpanded={this.setEditorExpanded}
          />
          <TextBox
            id="editor"
            text={this.state.editorText}
            onEditorUpdate={this.onEditorUpdate}
          />
        </div>
        <div className="previewer text-display" ref={this.previewerRef}>
          <TopBar
            text="Previewer"
            icon="fa fa-bookmark"
            toShrink={this.textEditorRef}
            toExpand={this.previewerRef}
            isExpanded={this.state.isPreviewerExpanded}
            setExpanded={this.setPreviewerExpanded}
          />
          <HTMLPreviewer
            HTMLToShow={DOMPurify.sanitize(marked(this.state.editorText), {
              ADD_ATTR: ["target"],
            })} //Needed added attribute so DOMPurify won't strip "_target" from external link
          />
        </div>
      </div>
    );
  }
}

export default App;
