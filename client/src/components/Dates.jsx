import React from "react";
import axios from "axios";
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from "moment";
import './../styles/react_dates_overrides.css';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components'
// import H5 from '/styled-components/styledH5.jsx'

class Dates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checkIn: null,
			checkOut: null,
			focusedInput: null
		}
	}

	render() {

		const H5 = styled.span`
		font-size: 12px;
		margin-bottom: 200px;
		`;		

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
          onDatesChange={({ checkIn, checkOut }) => { this.setState({ checkIn, checkOut })}}
          focusedInput={this.state.focusedInput}
					onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
					hideKeyboardShortcutsPanel = {true}
				/>
			</div>
		)
	}
}

export default Dates