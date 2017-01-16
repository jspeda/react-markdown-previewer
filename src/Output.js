import React, { Component } from 'react';
import marked from 'marked';

class Output extends Component {
  render() {
    return (
      <div className="output-box">
        marked('# this is a test');
      </div>
    )
  }
}

export default Output;
