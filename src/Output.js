import React, { Component } from 'react';
import marked from 'marked';
import Input from './Input';

class Output extends Component {

  //let markdown = marked('# this is a __test__')

  render() {
    return (
      <div className="output-box" value={marked('# hi')}>
      </div>
    )
  }
}

export default Output;
