import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import IndexPage from './pages';
import ShowPage from './pages/showNote';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    notes: {
      1: {
        _id: 1,
        title: "Hello",
        body: "this is my note",
        updateAt: new Date()
      },
      2: {
        _id: 2,
        title: "Hello 2",
        body: "this is my note 2",
        updateAt: new Date()
      }
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={(props) => <IndexPage {...props} notes={this.state.notes} /> } />
        <Route exact path='/notes/:id' component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} />} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
