import React from "react";
import styled from 'styled-components';
import AdultsCounter from './AdultsCounter.jsx'


class Guests extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalGuests: 1
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e) {
		e.target.classList.toggle("active");

		var content = e.target.nextElementSibling;
		if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
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
		// var dynamicDropdownTitle = this.state.totalGuests === 1 ? `${this.state.totalGuests} guest` : `${this.state.totalGuests} guests` 
	
		return (
			<div>
				<H5>Guests</H5>
				<CollapseButton onClick={this.handleClick} className="collapsible">1 guest</CollapseButton>
				<div className="content">
					<AdultsCounter/>
				</div>
			</div>
		)
	}
}

export default Guests