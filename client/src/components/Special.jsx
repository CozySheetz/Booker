import React from "react";
import styled from "styled-components";
import axios from "axios";

class Special extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const DivStrong = styled.div`
		font-weight: 500;
		font-size: 14px;
		`

		const Div = styled.div`
		font-weight: 300;
		font-size: 14px;
		`

		return (
			<div>
				<DivStrong>This home is on people’s minds.</DivStrong>
				<Div>It’s been viewed {this.props.listing.views} times in the past week.</Div>
			</div>
		)
	}
}

export default Special;