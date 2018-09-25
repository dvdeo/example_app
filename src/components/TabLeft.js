import React, {Component} from 'react';

import Top from './Top';
import ListNote from './ListNote';

class TabLeft extends Component {
	render() {
		return (
			<div className="tab-left">
				<Top/>
				<ListNote/>
			</div>
			
		);
	}
}

export default TabLeft;