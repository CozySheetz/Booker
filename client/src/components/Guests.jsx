import React from "react";
import styled from 'styled-components';
import AdultsCounter from './AdultsCounter.jsx';
import ChildrenCounter from './ChildrenCounter.jsx';
import InfantCounter from './InfantCounter.jsx';
import OutsideClickHandler from 'react-outside-click-handler'; 

class Guests extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			maxGuests: this.props.listing.max_guests,
			currentTotal: 1,
			currentAdults: 1,
			currentChildren: 0,
			currentInfants: 0,
			limit: null
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleIncrement = this.handleIncrement.bind(this);
	}
	
	handleClick(e) {
		var content = e.target.nextElementSibling;
		if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
		}
		
	}

	handleIncrement(type, num) {
		if (num === 1) {
			if (this.state.currentTotal < this.state.maxGuests) {
				if (type === "adults") {
					var newAdultTotal = this.state.currentAdults + 1;
					var newTotal = this.state.currentTotal + 1;

					this.setState({
						currentAdults: newAdultTotal,
						currentTotal: newTotal
					})
				} else if (type === "children") {
					var newChildrenTotal = this.state.currentChildren + 1;
					var newTotal = this.state.currentTotal + 1;

					this.setState({
						currentChildren: newChildrenTotal,
						currentTotal: newTotal
					})
				} else if (type === "infants") {
					var newInfantsTotal = this.state.currentInfants + 1;
					this.setState({
						currentInfants: newInfantsTotal,
					})
				}
			}
		} else if (num === -1) {
			if (this.state.currentTotal > 0) {
				if (type === "adults") {
					var newAdultTotal = this.state.currentAdults - 1;
					var newTotal = this.state.currentTotal - 1;

					this.setState({
						currentAdults: newAdultTotal,
						currentTotal: newTotal
					})
				} else if (type === "children") {
					var newChildrenTotal = this.state.currentChildren -1;
					var newTotal = this.state.currentTotal - 1;

					this.setState({
						currentChildren: newChildrenTotal,
						currentTotal: newTotal
					})
				} else if (type === "infants") {
					var newInfantsTotal = this.state.currentInfants - 1;
					var newTotal = this.state.currentTotal - 1;
					this.setState({
						currentInfants: newInfantsTotal,
					})
				}
			}
		}
	}

	render() {

		const H5 = styled.span`
		font-size: 12px;
		margin-bottom: 200px;
		`;

		const CollapseButton = styled.button`
		color: #444;
		cursor: pointer;
		padding: 18px;
		width: 100%;
		height: 50px;
		border: 1px solid;
		border-color: #E4E4E4
		border-radius: 2px
		text-align: left;
		outline: none;
		font-size: 15px;
		position: relative;
		`

		const ContainerDiv = styled.div`
		padding-top: 30px;
		padding-bottom: 30px;
		`

		const FooterDiv = styled.div`
		position: absolute;
		bottom: 0; 
		`

		return (
			<div>
				<H5>Guests</H5>
				<CollapseButton onClick={this.handleClick} className="collapsible">{this.state.currentTotal} guests</CollapseButton>
				<div className="content">
					<OutsideClickHandler
						onOutsideClick={(e) => {
							var content = document.getElementsByClassName('content')[0];
							if (content.style.display === "block") {
								content.style.display = "none";
								var currentTotal = this.state.currentTotal;
								this.props.saveTotal('guests', currentTotal)
							}
						}}
					>
						<ContainerDiv>
							<AdultsCounter 
								id="adults"
								currentAdults={this.state.currentAdults}
								handleIncrement={this.handleIncrement}
								limit={this.state.maxGuests === this.state.currentTotal ? true : false}
								min={this.state.currentAdults === 0 ? true : false}
							/>
						</ContainerDiv>
						<ContainerDiv>
							<ChildrenCounter 
								id="children"
								currentChildren={this.state.currentChildren}
								handleIncrement={this.handleIncrement}
								limit={this.state.maxGuests === this.state.currentTotal ? true : false}
								min={this.state.currentChildren === 0 ? true : false}
							/>
						</ContainerDiv>
						<ContainerDiv>
							<InfantCounter 
								id="infants"
								currentInfants={this.state.currentInfants}
								handleIncrement={this.handleIncrement}
								limit={this.state.maxGuests === this.state.currentTotal ? true : false}
								min={this.state.currentInfants === 0 ? true : false}
							/>
						</ContainerDiv>
						<ContainerDiv>
							{this.state.maxGuests} guests maximum. Infants don’t count toward the number of guests.
						</ContainerDiv>
						<br/>
					</OutsideClickHandler>
				</div>
			</div>
		)
	}
}

export default Guests