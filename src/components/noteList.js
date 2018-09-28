import React from 'react';

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
    }
    renderNotes() {
        const notes = Object.values(this.props.notes);
        return notes.map((note)=> <ItemNote key={note._id} note={note} />)
    }

    render() {
        return (
            <div className="list-note">
                {this.renderNotes()}
            </div>
        );
    }
}