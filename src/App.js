import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Home from './components/Home';
import Demo from './components/Demo';

class App extends Component {
  // add 2018/09/25
  constructor() {
    super(...arguments);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }


  render() {
    var Child;
    switch(this.state.route) {
      case '/about': Child = About; break;
      default: Child = Home; break;
    }
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      // <div>
      //   <ul>
      //     <li><a href="#/home">Home</a></li>
      //     <li><a href="#/about">About</a></li>
      //   </ul>
      //   <Child />
      // </div>
      <div>
        <Demo />
      </div>
    );
  }
}

export default App;
