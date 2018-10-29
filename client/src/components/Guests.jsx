import React from "react";
import styled from 'styled-components';
import AdultsCounter from './AdultsCounter.jsx';
import ChildrenCounter from './ChildrenCounter.jsx';
import InfantCounter from './InfantCounter.jsx';


class Guests extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			maxGuests: this.props.listing.max_guests,
			maxReached: false,
			currentGuests: 1,
			dropDown: false

		}
		this.handleClick = this.handleClick.bind(this);
		this.changeTotal = this.changeTotal.bind(this);
	}
	
	handleClick(e) {
		e.target.classList.toggle("active");

		var content = e.target.nextElementSibling;
		if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
		}
		
		var newDropDown = this.state.dropDown ? false : true;
		this.setState({
			dropDown: newDropDown
		})

	}

	changeTotal(num) {
		// console.log('oigogogogog');
		if (num === 1) {
			let oldTotal = this.state.currentGuests;
			let newTotal = oldTotal + 1;
			this.setState({
				currentGuests: newTotal
			}, () => {
				if (this.state.currentGuests === this.state.maxGuests) {
					this.setState({
						maxReached: true
					})
				}
			});
			
		} else if (num === -1) {
			let newTotal = this.state.currentGuests - 1;
			this.setState({
				currentGuests: newTotal
			})
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
		margin-top: 50px;
		margin-bottom: 50px;
		`

		return (
			<div>
				<H5>Guests</H5>
				<CollapseButton onClick={this.handleClick} className="collapsible">{this.state.currentGuests} guests</CollapseButton>
				<div className="content">
					<ContainerDiv>
						<AdultsCounter maxReached={this.state.maxReached} changeTotal={this.changeTotal}/>
					</ContainerDiv>
					<ContainerDiv>
						<ChildrenCounter />
					</ContainerDiv>
					<ContainerDiv>
						<InfantCounter />
					</ContainerDiv>
					<div>
						2 guests maximum. Infants don’t count toward the number of guests.
					</div>
					<br/>
				</div>
			</div>
		)
	}
}

export default Guests