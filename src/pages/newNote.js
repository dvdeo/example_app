import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
// import {Glyphicon} from 'react-bootstrap';

export default class NewPage extends React.Component {
	render() {
		return (
			<div className="new-note">
				<Input type="text" name="title" id="title" placeholder="Type your title note" />
				<Input type="textarea" name="text" id="exampleText" rows="15" maxlength="20" placeholder="Type your note here " />

				<div className="btn-func">
					<Button className="btn btn-outline-primary btn-success glyphicon glyphicon-plus">Save</Button>
					<Button className="btn btn-outline-warning"><Link to='/'>Cancel</Link></Button>
				</div>
			</div>
			
		);
	}
}