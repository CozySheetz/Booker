import React from "react";
import styled from 'styled-components';
import {DropdownMultiple, Dropdown} from 'reactjs-dropdown-component';


class Guests extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guests: [
				{
					id: 0,
					title: 'Adults',
					selected: false,
					key: 'location'
				},
				{
					id: 1,
					title: 'Children',
					selected: false,
					key: 'location'
				},
				{
					id: 2,
					title: 'Infants',
					selected: false,
					key: 'location'
				},
			]
		}
		this.resetThenSet = this.resetThenSet.bind(this);
		this.toggleSelected = this.toggleSelected.bind(this);
	}

	resetThenSet(id, key) {
		let temp = JSON.parse(JSON.stringify(this.state[key]));
		temp.forEach(item => item.selected = false);
		temp[id].selected = true;
		this.setState({
			[key]: temp
		});
	}

	toggleSelected(id, key) {
		let temp = JSON.parse(JSON.stringify(this.state[key]));
		temp[id].selected = !temp[id].selected;
		this.setState({
			[key]: temp
		});
	}

	render() {

		const H5 = styled.span`
		font-size: 12px;
		margin-bottom: 200px;
		`;	

		return (
			<div>
				<H5>Guests</H5>
				<Dropdown
					title="1 Guest"
					list={this.state.fruit}
					resetThenSet={this.resetThenSet}
				/>
				{/* <DropdownMultiple
  				titleHelper="Location"
					title="Select location"
					list={this.state.location}
					toggleItem={this.toggleSelected}
				/> */}
			</div>
		)
	}
}

export default Guests