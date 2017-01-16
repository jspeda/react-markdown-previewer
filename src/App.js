import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import marked from 'marked';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Markdown Previewer</h2>
        </div>
        <div className="main-container">
          <Input />
          <Output />
        </div>
      </div>
    );
  }
}

export default App;
