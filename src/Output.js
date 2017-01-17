import React, { Component } from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';

class Output extends Component {

  render() {
    return (
      <div className="output-box">
        {remark().use(reactRenderer).process(this.props.outputText.input).contents}
      </div>
    );
  }
};

export default Output;
