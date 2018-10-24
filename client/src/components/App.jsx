import React from "react";
import axios from "axios";
import Header from "./Header.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			listing: {},
			unavailability: {}
		}
	}

	componentDidMount() {
		var url = window.location.href;
		var id = url.slice(22);
		console.log('this id', id);

		axios.get(`/listings/${id}`).then((res) => {
			console.log('from server to front end', res.data[0]);
			this.setState({
				listing: res.data[0]
			})
		})

		axios.get('/')
	}

	render() {
		return (
			<div>
				<Header listing={this.state.listing}/>
			</div>
		)
	}
}

export default App