// import React, { Component } from 'react';
import React from 'react';
import logo from './images/logo.svg';
import logo_jvit from './images/logo1.png';
import './App.css';

// const MyComponents = (props) => {
//   const {name} = props;
//   return (
//     <div>Hello {name}</div>
//   );
// }

// function MyComponent(props) {
//   var {title} = props;
//   return (
//     <div>
//       <p>{title}: {props.children}</p>
//     </div>
//   );
// }
class App extends React.Component {
  // add 2018/09/24
  constructor(props) {
    super(props)

    this.state = {
      name: 'your name'
    }
  }

  onChange(e) {
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo_jvit} className="App-logo_jvit" alt="logo" />
          <h1 className="App-title">Welcome to Example ReactJS App</h1>
          <p>Developed by - Nero Duong</p>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
      // <div>
      //   <input type='text' onChange={this.onChange.bind(this)} />
      //   <MyComponent title='Hello'>{this.state.name}</MyComponent>
      // </div>
    );
  }
}

export default App;
