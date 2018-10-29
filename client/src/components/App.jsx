import React from "react";
import axios from "axios";
import Header from "./Header.jsx";
import Dates from "./Dates.jsx";
import Guests from "./Guests.jsx";
import Special from "./Special.jsx";
import styled from "styled-components";

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
	}

	render() {
		const Box = styled.section`
		padding: 2em
		border: 1px solid
		border-color: #E4E4E4
		width: 326px
		`;

		const Content = styled.section`
		width: 100%
		`

		const Button = styled.button`
		border-radius: 4px
		background-color: #FC5C63
		color: white
		width: 326px
		height: 50px
		margin-top: 20px
		margin-bottom: 20px
		`

		const Book = styled.span`
		font-size: 16px
		font-weight: bold
		`

		// const MainContainer = styled.container`
		// margin-top: 16px
		// margin-bottom: 24px
		// `;

		return (
			<div>
				<Box>
					<Content>
						<Header listing={this.state.listing}/><br/>
						<Dates /><br/>
						<Guests />
						<Button><Book>Request to Book</Book></Button>
						<div>You won't be charged yet</div>
						<Special />
					</Content>
				</Box>
			</div>
		)
	}
}

export default App