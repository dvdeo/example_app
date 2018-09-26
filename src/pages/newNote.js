import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'reactstrap';

export default class NewPage extends React.Component {
	state = {
		note:{
			title: '',
			body: '',
			createdAt: undefined,
			updatedAt: undefined
		}
	}

	updateValue = (e) => {
		const { note } = this.state;

		this.setState({
			note: {...note, [e.target.name]: e.target.value}
		});
	}

	handleSave = async (e) => {
		e.preventDefault();

		const id = await this.props.onSave(this.state.note);
		this.props.history.replace(`/notes/${ id }`);
	}
	render() {
		const { note } = this.state;
		return (
			<div className="new-note">
				<form onSubmit={this.handleSave}>
					<Input type="text" name="title" id="title" placeholder="Type your title note" value={note.title} onChange={this.updateValue} />
					<Input type="textarea" name="body" id="exampleText" rows="15" placeholder="Type your note here " value={note.body} onChange={this.updateValue} />

					<div className="btn-func">
						<Button className="btn btn-outline-primary btn-success glyphicon glyphicon-plus">Save</Button>
						<Button className="btn btn-outline-warning"><Link to='/'>Cancel</Link></Button>
					</div>
				</form>
			</div>
			
		);
	}
}