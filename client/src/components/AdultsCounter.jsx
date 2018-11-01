import React from "react";
import styled from 'styled-components';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";

class AdultsCounter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
	
		const Name = styled.div`
		font-weight: bold;
		float: left;
		font-size: 14px;
		`

		const Counter = styled.div`
		float: right;
		`

		const RemoveButtonSpan = styled.span`
		margin-left: 50px;
		margin-right: 50px;
		`

		const AddButtonSpan = styled.span`
		margin-left: 50px;
		margin-right: 10px;
		`

		const TotalSpan = styled.span`
		padding: 70px 0
		`

		return (
			<div className="flex-container">
				<div className="left">
					<Name>Adults</Name>
				</div>
				<div className="right">
					<Counter>
						<RemoveButtonSpan >
							<IconContext.Provider value={this.props.currentAdults === 0 ? { color: '#B7DADB', size: "3em" } : { color: '#128488', size: "3em" }}>
								<IoIosRemoveCircleOutline onClick={(e) => {this.props.handleIncrement("adults", -1)}}/>
							</IconContext.Provider>
						</RemoveButtonSpan>
						<TotalSpan>
							<span>{this.props.currentAdults}</span>
						</TotalSpan>
						<AddButtonSpan>
							<IconContext.Provider value={this.props.limit? { color: '#B7DADB', size: "3em" } : { color: '#128488', size: "3em" }}>
								<IoIosAddCircleOutline onClick={(e) => {this.props.handleIncrement("adults", 1)}}/>
							</IconContext.Provider>
						</AddButtonSpan>
					</Counter>
				</div>
			</div>
		)
	}
}

export default AdultsCounter