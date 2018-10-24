import React from "react";
import axios from "axios";
import Header from "./Header.jsx";
import Dates from "./Dates.jsx";
import Guests from "./Guests.jsx";
import Special from "./Special.jsx";

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
				<Header listing={this.state.listing}/><br/>
				<Dates /><br/>
				<Guests />
				<button>Request to Book</button>
				<div>You won't be charged yet</div>
				<Special />
			</div>
		)
	}
}

export default App