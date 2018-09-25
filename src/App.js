import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TabLeft from './components/TabLeft';
import TabRight from './components/TabRight';

class App extends Component {
  render() {
    return (
      <div className="contain">
        <TabLeft/>
        <TabRight/>
      </div>
    );
  }
}

export default App;
