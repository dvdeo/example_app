import React, {Component} from 'react';

class ListNote extends Component {
	render() {
		return (
			<div className="list-note">
				<li className="note-item">
					<h1>React Component Patterns</h1>
					<p>There are notes for ReactJS</p>
				</li>
				<li className="note-item">
					<h1>DOM Elements</h1>
					<p>There are notes for ReactJS</p>
				</li>
			</div>
			
		);
	}
}

export default ListNote;