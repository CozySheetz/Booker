import React from "react";
import styled from 'styled-components';

class AdultsCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalAdults: 1
		}
	}


	render() {
	
		const ContainerDiv = styled.div`
		margin-top: 30px;
		margin-bottom: 70px;
		`

		const Name = styled.div`
		font-weight: bold;
		float: left;
		font-size: 14px;
		`

		const Counter = styled.div`
		
		`

		return (
			<ContainerDiv>
				<div className="left">
					<Name>Adults</Name>
				</div>
				<div className="right">
					<Counter>
						<button>
							-
						</button>
						<div>
							{this.state.totalAdults}
						</div>
						<button>
							+
						</button>
					</Counter>
				</div>
			</ContainerDiv>
		)
	}
}

export default AdultsCounter