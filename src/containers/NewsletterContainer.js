import React from 'react';
import {Newsletter} from './../components/Newsletter';

export class NewsletterContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showNewsletter: true,
			position: 0,
			closePanelClicked: false
		};
		this.handleCloseNewsletter = this.handleCloseNewsletter.bind(this);
		this.getWrapperClass = this.getWrapperClass.bind(this);
	}

	handleCloseNewsletter() {
		console.log('close clicked');
		this.setState({
			closePanelClicked: true
		});
		setTimeout(() => {
			this.setState({
				showNewsletter: false
			});
		}, 5000);
	}


	getWrapperClass() {
		let wrapperClass = 'Newsletter-wrapper';
		if (this.state.closePanelClicked) {
			wrapperClass += ' Newsletter-slide-down';
		}

		return wrapperClass;
	}

	render() {
		return this.state.showNewsletter &&
			<Newsletter position={this.state.position} handleCloseNewsletter={this.handleCloseNewsletter} getWrapperClass={this.getWrapperClass()}/>;
	}
}
