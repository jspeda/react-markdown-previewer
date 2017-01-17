import React, { Component } from 'react';

class Input extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 'Here is some sample text'
  //   };
//
  //   this.handleChange = this.handleChange.bind(this);
  // }
//
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  //   console.log(this.state.value);
  // }
  render() {
    return (
      <div className="input-box">
        <textarea rows="50" cols="100" defaultValue={this.props.inputText.input}
          onChange={this.props.handleChange}></textarea>
      </div>
    )
  }
}

export default Input;
