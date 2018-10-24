import React from "react";
import axios from "axios";

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>${this.props.listing.daily_rate} per night</div>
				<div>Rating: {this.props.listing.rating}</div>
			</div>
		)
	}
}

export default Header