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

		const FeeContainer = styled.div`
		font-size: 12px;
		font-weight: 300;
		`;

		const TotalContainer = styled.div`
		font-size: 12px;
		font-weight: bold;
		`;

		const Line = styled.div`
		border-bottom: 1px solid #E4E4E4;
		margin-bottom: 8px;
		margin-top: 8px;
		`;

		const SubTotal = styled.span`
		float: right;
		`

		return (
			<div>
				<FeeContainer>${this.state.dailyRate} x {this.props.totalDays} night{this.props.totalDays > 1 ? 's' : ''}<SubTotal>{this.props.totalCost}</SubTotal></FeeContainer>
				<Line />
				<FeeContainer>Cleaning fee<SubTotal>${this.state.cleaningFee}</SubTotal></FeeContainer>
				<Line />
				<FeeContainer>Service fee<SubTotal>${this.state.serviceFee}</SubTotal></FeeContainer>
				<Line />
				<TotalContainer>Total <SubTotal>${this.props.totalCost + this.state.cleaningFee + this.state.serviceFee}</SubTotal></TotalContainer>
			</div>
		)
	}
}

export default Total