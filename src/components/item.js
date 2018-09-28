import React from 'react';
import { Link } from 'react-router-dom';

export default class ItemNote extends React.Component {
    
    render() {
        const note = this.props.note;
        return (
            <Link to={`/notes/${note._id}`}><div key={note._id} className="list-item" id={note._id}><li>{note.title}</li><p>{note.updatedAt}</p></div></Link>
        );
    }
}