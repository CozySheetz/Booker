import React from "react";
import axios from "axios";
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from "moment";
import './../styles/react_dates_overrides.css';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components'

class Dates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checkIn: null,
			checkOut: null,
			focusedInput: null,
			startDate: null,
			endDate: null
		}
		this.handleDatesSet = this.handleDatesSet.bind(this);
	}

	handleDatesSet() {
		if (this.state.startDate && this.state.endDate) {
			var days = this.state.endDate.diff(this.state.startDate, 'days');
			this.props.saveTotal('days', days);
		}
	}	

	render() {

		const H5 = styled.span`
		font-size: 12px;
		margin-bottom: 200px;
		`;		

		// const datesList = this.props.unavailabilities.map(date => {
		// 	return moment(date);
		// });

		// const isDayBlocked = 

		return (
			<div>
				<H5>Dates</H5><br/>
				<DateRangePicker
					startDateId="startDate"
					endDateId="endDate"
					startDatePlaceholderText = "Check in"
					endDatePlaceholderText = "Check out"
          startDate={this.state.startDate}
					endDate={this.state.endDate}
					numberOfMonths = {1}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }, () => {
						this.handleDatesSet();
					})}}
          focusedInput={this.state.focusedInput}
					onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
					hideKeyboardShortcutsPanel = {true}
					minimumNights = {1}
					block = {true}
					showClearDates = {true}
					// isOutsideRange = {(date) => date.year() !== 2018}
					// isDayBlocked = {(day) => {return blockedDays.includes(day); }}
				/>
			</div>
		)
	}
}

export default Dates