import React from "react";
import axios from "axios";

class Special extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>This home is on people’s minds.</p>
				<p>It’s been viewed 262 times in the past week.</p>
			</div>
		)
	}
}

export default Special;