import React, { Component } from 'react';
import marked from 'marked';
import Input from './Input';

class Output extends Component {

  render() {
    return (
      <div className="output-box">
        {marked(this.props.outputText.input)}
      </div>
    )
  }
}

export default Output;
