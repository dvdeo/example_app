import React, {Component} from 'react';

let Tab_let = () => {return <div>Create by let</div>}

const Tab_const = () => {return <div>Create by const - Thêm nội dung</div>}
class About extends Component {
	render() {
		return (
			<div>
			<Tab_let />
			<Tab_const/>
			</div>
		);
	}
}

export default About;