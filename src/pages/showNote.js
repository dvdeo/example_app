import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Popup from 'react-popup';

export default class ShowPage extends React.Component {

    handleDelete = async () => {
        const {note} = this.props;
        console.log(note._id);
        await this.props.onDelete(note._id, note._rev);
        this.props.history.replace('/');
        
    }
    render() {
        const { note } = this.props;
        if (!note) {
            return null;
        }
        return (
            <div className="show-page">
                <div className="note-title">
                    <h1>{note.title}</h1>
                </div>
                <div className="note-body">
                    <p>{ note.body }</p>
                </div>
                <div className="edit">
                    <Link to={`/edit/${note._id}`}><Button className="btn btn-outline-warning">Edit</Button></Link>
                    <Button className="btn btn-outline-danger" onClick={this.handleDelete}>Delete</Button>
                </div>
            </div>
        );
    }
}