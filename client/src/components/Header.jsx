import React from "react";
import axios from "axios";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			rate: 0,
			rating: 0
		}
	}

	componentDidMount() {
		axios.get('./listings').then((res) => {
			console.log('from server to front end', res.body);
		})
	}

	render() {
		return (
			<div>
				<p>Header</p>
			</div>
		)
	}
}

export default Header