import React from "react";
import axios from "axios";

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<span>${this.props.listing.daily_rate}</span> per night
			</div>
		)
	}
}

export default Header