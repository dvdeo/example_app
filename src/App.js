import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import './bootstrap/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';

import IndexPage from './pages';
import ShowPage from './pages/showNote';
import Navbar from './components/navbar';
import NoteList from './components/noteList';
import NewPage from './pages/newNote';

class App extends Component {
  state = {
    notes: {
      1: {
        _id: 1,
        title: "reactstrap",
        body: "Follow the create-react-app instructions up to the Adding Bootstrap section and instead follow the reactstrap version of adding bootstrap.",
        updateAt: new Date().toLocaleDateString()
      },
      2: {
        _id: 2,
        title: "Adding Bootstrap",
        body: "Install reactstrap and Bootstrap from NPM. Reactstrap does not include Bootstrap CSS so this needs to be installed as well:",
        updateAt: new Date().toLocaleDateString()
      }
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div className="contain">
        <Navbar />
        
        <NoteList notes={this.state.notes} />
        <Route exact path='/' component={(props) => <IndexPage {...props} notes={this.state.notes} /> } />
        <Route exact path='/notes/:id' component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} />} />
        <Route exact path='/new' component={(props) => <NewPage />} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
