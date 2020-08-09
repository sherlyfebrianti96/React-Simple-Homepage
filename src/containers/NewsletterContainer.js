import React from 'react';
import {Newsletter} from './../components/Newsletter';

export class NewsletterContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showNewsletter: true,
			position: 0
		};
		this.handleCloseNewsletter = this.handleCloseNewsletter.bind(this);
	}

	handleCloseNewsletter() {
		console.log('close clicked');
		setTimeout(() => {
			this.setState({
				showNewsletter: false
			});
		}, 5000);
	}

	render() {
		return this.state.showNewsletter &&
			<Newsletter position={this.state.position} handleCloseNewsletter={this.handleCloseNewsletter}/>;
	}
}
