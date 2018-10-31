import React from "react";
import axios from "axios";
import Header from "./Header.jsx";
import Dates from "./Dates.jsx";
import Guests from "./Guests.jsx";
import Special from "./Special.jsx";
import Total from "./Total.jsx";
import styled from "styled-components";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			listing: {},
			unavailabilities: {},
			totalGuests: 1,
			totalDays: 0,
			totalCost: 0,
			showTotal: false
		}

		this.saveTotal = this.saveTotal.bind(this);
		this.calculateTotal = this.calculateTotal.bind(this);
	}

	calculateTotal(days, guests = 1) {
		var listing = this.state.listing;
		var total = (listing.daily_rate * days);

		total = total + this.state.listing.cleaning_fee + this.state.listing.service_fee;
		console.log(total);
		
		this.setState({
			totalCost: total
		})
		
	}

	saveTotal(type, num) {
		if (type === 'guests') {
			this.setState({
				totalGuests: num
			})
		} else if (type === 'days') {
			console.log('save total fires!', num)

			this.calculateTotal(num);

			this.setState({
				totalDays: num,
				showTotal: true
			})
		}
	}

	componentDidMount() {
		var url = window.location.href;
		var id = url.slice(22);
		console.log('this id', id);

		axios.get(`/listings/${id}`).then((res) => {
			console.log('from server to front end, listing:', res.data[0]);
			this.setState({
				listing: res.data[0]
			})
		})

		axios.get(`/unavailabilities/${id}`).then((res) => {
			console.log('from server to front end, unavailabilities:', res.data);
			this.setState({
				unavailabilities: res.data
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

		const Line = styled.div`
		border-bottom: 1px solid #E4E4E4;
		margin-bottom: 20px;
		`

		const BottomLine = styled.div`
		border-bottom: 1px solid #E4E4E4;
		margin-top: 20px;
		margin-bottom: 20px;
		`

		const MemoDiv = styled.div`
		text-align: center;
		font-weight: 400;
		`
		// const MainContainer = styled.container`
		// margin-top: 16px
		// margin-bottom: 24px
		// `;

		return (
			<div>
				<Box>
					<Content>
						<Header 
							listing={this.state.listing}
							totalCost={this.state.totalCost}
						/><br/>
						<Line />
						<Dates 
							saveTotal={this.saveTotal} 
							listing={this.state.listing} 
							unavailabilities={this.state.unavailabilities}
						/>
						<br/>
						<Guests listing={this.state.listing}/>
						<br/>
						{this.state.showTotal ? 
						<Total 
							listing={this.state.listing}
							totalCost={this.state.totalCost}
							totalDays={this.state.totalDays}
						/> : <div></div>
						}
						<Button><Book>Request to Book</Book></Button>
						<MemoDiv>You won't be charged yet</MemoDiv>
						<BottomLine />
						<Special listing={this.state.listing}/>
					</Content>
				</Box>
			</div>
		)
	}
}

export default App