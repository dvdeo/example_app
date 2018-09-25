import React, {Component} from 'react';

import plus from '../images/add.svg';

class Top extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			_className: '',
			_title:''
		}
	}

	render() {
		return (
			<div className="top">
				<span className="top-title">Notes</span>
				<span className="top-img"><a href="#"><img src={plus}/></a></span>
				
			</div>
			
		);
	}
}

export default Top;