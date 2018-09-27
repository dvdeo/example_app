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
import EditPage from './pages/editNote';

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
      notes: notes,
      loading: false
    });
  }

  handleSave = async (note) => {
    let {rev, id}  = await this.state.db.createNote(note);
    console.log(rev);
    const { notes } = this.state;

    note._id = id;
    note._rev = rev;
    this.setState({
      notes: {
        ...notes,
        [id]: note
      }
    });

    return id;
  }

  handleUpdate = async (note, id) => {
    let { rev } = await this.state.db.updateNote(note, id);
    console.log(rev);
    const { notes } = this.state;
    // const { notes } = await this.state.db.getAllNotes();
    note._id = id;
    note._rev = rev;
    this.setState({
      notes: {
        ...notes,
        [id]: note
      }
    });
  }

  handleDelete = async (_id, _rev) => {
    await this.state.db.deleteNote(_id, _rev);
    delete this.state.notes[_id];
    let {notes} = this.state
    
    console.log(this.state.notes);
    // delete {notes._id};
    // console.log(notes);
    this.setState({
      notes: {
        ...notes
      }
    });
  }

  renderContent() {
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }
    return (
      <div className="contain">
        <Navbar />
        
        <NoteList notes={this.state.notes} />
        {/* <Route exact path='/' component={(props) => <IndexPage {...props} notes={this.state.notes} /> } /> */}
        <Route exact path='/' component={(props) => <ShowPage {...props} note={this.state.notes[Object.keys(this.state.notes)[0]]} onDelete={this.handleDelete}/>} />
        <Route exact path='/notes/:id' component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} onDelete={this.handleDelete}/>} />
        <Route exact path='/edit/:id' component={(props) => <EditPage {...props} note={this.state.notes[props.match.params.id]} onUpdate={this.handleUpdate} />} />
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
