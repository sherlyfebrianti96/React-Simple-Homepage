import React from 'react';
import {Newsletter} from './../components/Newsletter';

export class NewsletterContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showNewsletter: true
		};
		this.handleCloseNewsletter = this.handleCloseNewsletter.bind(this);
	}

	handleCloseNewsletter() {
		this.setState({
			showNewsletter: false
		});
	}

	render() {
		const newsletter = this.state.showNewsletter && <Newsletter handleCloseNewsletter={this.handleCloseNewsletter} />;
		return newsletter;
	}
}
