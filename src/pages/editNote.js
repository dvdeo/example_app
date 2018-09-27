import React from 'react';
import { Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class EditPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			note: {
				title: this.props.note.title,
				body: this.props.note.body,
				_rev: this.props.note._rev
			}
			
		}
	}
	updateValue = (e) => {
		const { note } = this.state;

		this.setState({
			note: {...note, [e.target.name]: e.target.value}
		});
	}

	//update note
	handleUpdate = async (e) => {
		e.preventDefault();

		if (this.state.note.title !== "" && this.state.note.body !== ""){
			// const id = await this.props.onUpdate(this.state.note);
			await this.props.onUpdate(this.state.note, this.props.note._id);
			this.props.history.replace(`/notes/${ this.props.note._id }`);
		}
	}

	render() {
		return (
			<div className="new-note">
				<form onSubmit={this.handleUpdate}>
					<Input type="text" name="title" id="title" placeholder="Type your title note" value={this.state.note.title} onChange={this.updateValue} />
					<Input type="textarea" name="body" id="exampleText" rows="15" placeholder="Type your note here " value={this.state.note.body} onChange={this.updateValue}/>

					<div className="btn-func">
						<Button className="btn btn-outline-primary btn-success glyphicon glyphicon-plus">Save</Button>
						<Link to={`/notes/${this.props.note._id}`}><Button className="btn btn-outline-warning">Cancel</Button></Link>
					</div>
				</form>
			</div>
		)
	}
}