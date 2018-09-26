import React from 'react';
import { Link } from 'react-router-dom';

var style='';
export default class Notelist extends React.Component {
    constructor() {
        super();
        this.state = {
            _change: true
        }
    }
    onChangeStyle() {
        // this.setState({_change: !this.state._change})
    }
    renderNotes() {
        let style = this.state._change ? 'list-item' : 'list-item active';
        const notes = Object.values(this.props.notes);
        console.log(style);
        return notes.map((note)=> <Link to={`/notes/${note._id}`}><div className={style} onClick={this.onChangeStyle.bind(this)}><li>{note.title}</li><p>{note.updateAt}</p></div></Link>)
    }

    render() {
        return (
            <div className="list-note">
                {this.renderNotes()}
            </div>
        );
    }
}