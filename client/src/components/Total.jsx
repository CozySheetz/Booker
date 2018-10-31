import React from "react";
import axios from "axios";
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from "moment";
import './../styles/react_dates_overrides.css';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components'
// import H5 from '/styled-components/styledH5.jsx'

class Total extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dailyRate: this.props.listing.daily_rate,
			cleaningFee: this.props.listing.cleaning_fee,
			serviceFee: this.props.listing.service_fee, 
		}
	}

	

	render() {

		const H5 = styled.span`
		font-size: 12px;
		margin-bottom: 200px;
		`;		

		return (
			<div>
				<H5>Total</H5><br/>
				<div>{this.state.dailyRate}</div>
				<div>{this.state.cleaningFee}</div>
				<div>{this.state.serviceFee}</div>
				<div>{this.props.totalCost}</div>
			</div>
		)
	}
}

export default Total