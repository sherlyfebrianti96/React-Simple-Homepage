import React from 'react';
import '../styles/NewsletterStyle.scss';

export class Newsletter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			closePanelClicked: false
		};
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick() {
		this.setState({
			closePanelClicked: true
		});
		this.props.handleCloseNewsletter();
	}

	getWrapperClass() {
		let wrapperClass = 'Newsletter-wrapper';
		if (this.state.closePanelClicked) {
			wrapperClass += ' Newsletter-slide-down';
		}

		return wrapperClass;
	}

	render() {
		const styles = {
			bottom: this.props.position
		};

		return (
			<div className={this.getWrapperClass()} style={styles}>
				<div className="Newsletter">
					<div className="Headline">
						<h2>Get latest updates in web technologies</h2>
						<p>
							I write articles related to web technologies, such as design trends, development tools, UI/UX case studies
							and reviews, and more. Sign up to my newsletter to get them all.
						</p>
					</div>
					<form className="Newsletter-form">
						<div className="Input">
							<input type="email" placeholder="Email address"/>
						</div>
						<div className="Button">
							<button>Count me in!</button>
						</div>
					</form>
					<div className="Newsletter-close" onClick={this.handleOnClick}>X</div>
				</div>
			</div>
		);
	}
};
