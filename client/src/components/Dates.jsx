import React from "react";
import axios from "axios";
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from "moment";
import 'react-dates/lib/css/_datepicker.css';

class Dates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: null,
			endDate: null,
			focusedInput: null
		}
	}

	render() {
		return (
			<div>
				<DateRangePicker
					startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
				/>
			</div>
		)
	}
}

export default Dates