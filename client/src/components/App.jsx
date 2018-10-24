import React from "react";
import axios from "axios";
import Header from "./Header.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			listing: {}
		}
	}

	componentDidMount() {
		axios.get('./*').then((res) => {
			console.log('from server to front end', res.body);
		})
	}

	render() {
		return (
			<div>
				Input listing:
				<input/>
				<Header listing={this.state.listing}/>
			</div>
		)
	}
}

export default App