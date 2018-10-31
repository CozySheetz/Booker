import React from "react";
import axios from "axios";
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components'

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var stars = Number(this.props.listing.rating);

		const Rate = styled.span`
		font-size: 18px
		font-weight: bold
		`;

		var starColor = '#128488'

		return (
			<div>
				<div>
					<Rate>${this.props.totalCost !== 0 ? this.props.totalCost + this.props.listing.cleaning_fee + this.props.listing.service_fee: this.props.listing.daily_rate}</Rate> per night
				</div>
				<div>
					<StarRatingComponent 
						name="rating" 
						editing={false}
						starColor={starColor}
						starCount={5}
						value={stars}
					/><span>{this.props.listing.ratings_count}</span>
				</div>
			</div>
		)
	}
}

export default Header
