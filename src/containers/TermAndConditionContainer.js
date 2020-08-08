import React from 'react';
import {TermAndCondition} from './../components/TermAndCondition';

export class TermAndConditionContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showTermAndCondition: true
		};
		this.handleCloseTermAndCondition = this.handleCloseTermAndCondition.bind(this);
	}

	handleCloseTermAndCondition() {
		this.setState({
			showTermAndCondition: false
		})
	}

	render() {
		return this.state.showTermAndCondition &&
			<TermAndCondition handleCloseTermAndCondition={this.handleCloseTermAndCondition}/>;
	}
}
