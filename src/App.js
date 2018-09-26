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

import DB from './db';

class App extends Component {
  state = {
    db: new DB('notes-react'),
    notes: {},
    loading: true
  }

  async componentDidMount() {
    const notes = await this.state.db.getAllNotes();

    this.setState({
      notes,
      loading: false
    });
  }

  handleSave = async (note) => {
    let { id } = await this.state.db.createNote(note);

    const { notes } = this.state;

    this.setState({
      notes: {
        ...notes,
        [id]: note
      }
    });

    return id;
  }

  renderContent() {
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }
    return (
      <div className="contain">
        <Navbar />
        
        <NoteList notes={this.state.notes} />
        <Route exact path='/' component={(props) => <IndexPage {...props} notes={this.state.notes} /> } />
        <Route exact path='/notes/:id' component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} />} />
        <Route exact path='/new' component={(props) => <NewPage {...props} onSave={this.handleSave} />} />
      </div>
    )
  }
  render() {
    return (
      <BrowserRouter>
        {this.renderContent()}
      </BrowserRouter>
    );
  }
}

export default App;
