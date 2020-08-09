import React from 'react';
import {Newsletter} from './../components/Newsletter';

const pendingNewsletterCookieString = 'pendingNewsletter=true';

export class NewsletterContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showNewsletter: false,
			position: 0,
			closePanelClicked: false
		};
		this.handleCloseNewsletter = this.handleCloseNewsletter.bind(this);
		this.getWrapperClass = this.getWrapperClass.bind(this);
	}

	componentDidMount() {
	if (document.cookie !== pendingNewsletterCookieString) {
			this.setState({
				showNewsletter: true
			});
		}
	}

	handleCloseNewsletter() {
		this.setState({
			closePanelClicked: true
		});
		setTimeout(() => {
			this.setState({
				showNewsletter: false
			});
			this.setVisitedCookie();
		}, 5000);
	}

	getWrapperClass() {
		let wrapperClass = 'Newsletter-wrapper';
		if (this.state.closePanelClicked) {
			wrapperClass += ' Newsletter-slide-down';
		}

		return wrapperClass;
	}

	setVisitedCookie = () => {
		document.cookie = pendingNewsletterCookieString + '; max-age=' + (10 * 60);
	};

	render() {
		return this.state.showNewsletter &&
			<Newsletter position={this.state.position} handleCloseNewsletter={this.handleCloseNewsletter} getWrapperClass={this.getWrapperClass()}/>;
	}
}
