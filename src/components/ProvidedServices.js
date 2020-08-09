import React from 'react';
import {TermAndCondition} from './../components/TermAndCondition';
import './../styles/ProvidedServices.scss';

export const ProvidedServices = (props) => {
	return (
		<div className="Provided-services">
			<div className="Content">
				<div className="Row Highlight">
					<h1>How Can I Help You?</h1>
					<p>Our work then targeted, best practices outcomes social innovation synergy.</p>
					<p>Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale.</p>
				</div>
			</div>
			<div className="Services">
				{props.getServices}
			</div>
			<div className="Clearfix"></div>
		</div>
	);
}
