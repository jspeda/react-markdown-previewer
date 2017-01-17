import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '\n # This is a markdown previewer \n ****  \n ## Here we have some *sample text* \n _try it yourself!_'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
   this.setState({input: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Markdown Previewer</h2>
        </div>
        <div className="outer-container">
          <div className="main-container">
            <Input inputText={this.state} handleChange={this.handleChange} />
            <Output outputText={this.state} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default App;
