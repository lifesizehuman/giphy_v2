import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Components/Body'
import Wrapper from './Components/Wrapper'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Body />
      </Wrapper>
    );
  }
}

export default App;
