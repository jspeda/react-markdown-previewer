import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import marked from 'marked';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: 'here is some sample text'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
   this.setState({input: event.target.value});
   console.log(this.state.input);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Markdown Previewer</h2>
        </div>
        <div className="main-container">
          <Input inputText={this.state} handleChange={this.handleChange} />
          <Output outputText={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
