import React from "react";
import 'react-dates/initialize';
import './../styles/react_dates_overrides.css';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components'

class Total extends React.Component {
	constructor(props) {
		super(props);
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

		const {
      listing: {
        daily_rate,
				cleaning_fee,
				service_fee
			},
			totalDays,
			totalCost,

    } = this.props;

		return (

			<div>
				<FeeContainer>${daily_rate} x {totalDays} night{totalDays > 1 ? 's' : ''}<SubTotal>${totalCost}</SubTotal></FeeContainer>
				<Line />
				<FeeContainer>Cleaning fee<SubTotal>${cleaning_fee}</SubTotal></FeeContainer>
				<Line />
				<FeeContainer>Service fee<SubTotal>${service_fee}</SubTotal></FeeContainer>
				<Line />
				<TotalContainer>Total <SubTotal>${totalCost + cleaning_fee + service_fee}</SubTotal></TotalContainer>
			</div>
		)
	}
}

export default Total