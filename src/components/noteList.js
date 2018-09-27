import React from 'react';
import { Link } from 'react-router-dom';

import ItemNote from './item';

export default class Notelist extends React.Component {
    constructor() {
        super();
        this.state = {
            _change: true
        }
    }
    onChangeStyle() {
        this.setState({_change: !this.state._change})
        // console.log(id);
    }
    renderNotes() {
        let style = this.state._change ? 'list-item' : 'list-item active';
        const notes = Object.values(this.props.notes);
        return notes.map((note)=> <ItemNote note={note} />)
    }

    render() {
        return (
            <div className="list-note">
                {this.renderNotes()}
            </div>
        );
    }
}