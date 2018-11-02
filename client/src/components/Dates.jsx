import React from "react";
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
			focusedInput: null,
			startDate: null,
			endDate: null,
			datesSubmitted: false
		}
		this.handleDatesSet = this.handleDatesSet.bind(this);
	}

	handleDatesSet() {
		if (this.state.startDate && this.state.endDate) {
			var days = this.state.endDate.diff(this.state.startDate, 'days');
			this.props.saveTotal('days', days);
			this.props.saveStartEnd(this.state.startDate, this.state.endDate);
			this.setState({
				datesSubmitted: true
			})
		}
	}	

	render() {

		const H5 = styled.div`
		font-size: 12px;
		margin-bottom: 5px;
		`;		

		var test = [moment('11-10-2018')];  
		// const isDayBlocked = day => result.filter(d => d.isSame(day, 'day')).length > 0;


		return (
			<div>
				<H5>Dates</H5>
				<DateRangePicker
					isDayBlocked={this.props.isDayBlocked}
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
					minimumNights = {1}
					// isOutsideRange = {(date) => date.year() !== 2018}
					// isDayBlocked = {(day) => {return blockedDays.includes(day); }}
				/>
			</div>
		)
	}
}

export default Dates