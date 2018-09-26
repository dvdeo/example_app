import React from 'react';

export default class ShowPage extends React.Component {
    render() {
        const { note } = this.props;
        return (
            <div className="show-page">
                <h1>{note.title}</h1>
                <p>{ note.body }</p>
            </div>
        );
    }
}