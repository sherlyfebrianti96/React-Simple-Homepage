import React from 'react';
import './../styles/TermAndConditionStyle.scss';

export class TermAndCondition extends React.Component {
	render() {
		return (
			<div className="Content Privacy-policy">
				<div className="Row">
					<p className="Privacy-policy-text">By accessing and using this website, you acknowledge that you have read and
						understand our Cookie Policy, Privacy Policy, and our Terms of Service.</p>
					<div className="Privacy-policy-button">
						<button onClick={this.props.handleCloseTermAndCondition}>Got it</button>
					</div>
					<div className="Clearfix" />
				</div>
			</div>
		);
	}
}
