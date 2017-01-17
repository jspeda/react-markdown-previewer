import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
      <div className="input-box">
        <textarea rows="51" cols="75" defaultValue={this.props.inputText.input}
          onChange={this.props.handleChange}></textarea>
      </div>
    );
  }
};

export default Input;
