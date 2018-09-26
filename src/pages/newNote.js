import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import { PouchDB } from 'react-pouchdb';

var _title = '';
var _content = '';
var db = new PouchDB('notes');
function addNewNote(content) {
	
	db.put(content);
	db.info();
}
export default class NewPage extends React.Component {
	constructor(props, state) {
		super(props, state);
		this.state = {
			_inputTitle: '',
			_inputContent: ''
		}
	}


	

	getContent() {
		const item = {
			_id: new Date().toLocaleDateString(),
			_title: _title,
			_content: _content
		};
		
		addNewNote(item);
	}

	updateInputTitle(e) {
		this.setState(
			{
				_inputTitle: e.target.value
			}
			);
		_title = this.state._inputTitle;
	}

	updateInputContent(e) {
		this.setState({_inputContent: e.target.value});
		_content = this.state._inputContent;
	}
	render() {
		return (
			<div className="new-note">
				<Input type="text" name="title" id="title" placeholder="Type your title note" onChange={(e)=>this.updateInputTitle(e)} />
				<Input type="textarea" name="text" id="exampleText" rows="15" placeholder="Type your note here " onChange={(e)=>this.updateInputContent(e)} />

				<div className="btn-func">
					<Button className="btn btn-outline-primary btn-success glyphicon glyphicon-plus" onClick={this.getContent}>Save</Button>
					<Button className="btn btn-outline-warning"><Link to='/'>Cancel</Link></Button>
				</div>
			</div>
			
		);
	}
}