import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PouchDB from 'pouchdb';


class App extends Component {
  showInfoDB() {
    const db = new PouchDB('notes');
    const note = {
      _id: 'nero'+new Date().toISOString(),
      title: 'Something in the world',
      complete: false
    };
    //Write note to the database
    db.put(note, (err, result)=> {
      if (!err) {
        console.log("Successfully!");
      }
    });

    //show items fromt the database
    // db.allDocs({include_docs: true, descending: true }, (err, doc)=>redrawTodosUI(doc.rows));
    // db.get('nero').then((doc)=>{console.log(doc)});
    db.info().then((doc)=>console.log(doc));
    db.get('nero').then((doc)=>{
      // doc._id='Change Title the second';
      // db.put(doc);
      console.log(doc)});
    console.log(db.allDocs({include_docs: true}));
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.showInfoDB()}
        </p>
      </div>
    );
  }
}

export default App;
