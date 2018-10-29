import React from "react";
import styled from 'styled-components';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";

class ChildrenCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalChildren: 0
		}
		this.handleClickRemove = this.handleClickRemove.bind(this);
		this.handleClickAdd = this.handleClickAdd.bind(this);
	}

	handleClickRemove(e) {
		e.preventDefault();
		if (this.state.totalChildren !== 0) {
			
			var newTotal = this.state.totalChildren - 1;
			this.setState({
				totalChildren: newTotal
			})
		}
	}

	handleClickAdd(e) {
		e.preventDefault();

		if (this.state.totalChildren < 4) {
			
			var newTotal = this.state.totalChildren + 1;
			this.setState({
				totalChildren: newTotal
			})
		}
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
			<div>
				<div className="left">
					<Name>Children</Name><br/>
				</div>
				<div className="right">
					<Counter>
						<RemoveButtonSpan>
							<IconContext.Provider value={this.state.totalChildren > 0 ? { color: '#128488', size: "3em" } : { color: '#B7DADB', size: "3em" }}>
								<IoIosRemoveCircleOutline onClick={this.handleClickRemove}/>
							</IconContext.Provider>
						</RemoveButtonSpan>
						<TotalSpan>
							<span>{this.state.totalChildren}</span>
						</TotalSpan>
						<AddButtonSpan>
							<IconContext.Provider value={{ color: '#128488', size: "3em" }}>
								<IoIosAddCircleOutline onClick={this.handleClickAdd}/>
							</IconContext.Provider>
						</AddButtonSpan>
					</Counter>
				</div>
			</div>
		)
	}
}

export default ChildrenCounter