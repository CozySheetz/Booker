import React from "react";
import axios from "axios";
import StarRatingComponent from 'react-star-rating-component';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var stars = Number(this.props.listing.rating);

		return (
			<div>
				<div><strong>${this.props.listing.daily_rate}</strong> per night</div>
				<div>
				<StarRatingComponent 
          name="rating" 
          editing={false}
          // renderStarIcon={() => <span></span>}
          starCount={5}
          value={stars}
        /><span>{this.props.listing.views}</span>
				</div>
			</div>
		)
	}
}

export default Header