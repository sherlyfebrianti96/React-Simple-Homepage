import React from 'react';
import './../styles/FooterStyle.scss';

export class FooterContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Footer">
				<div className="Content">
					<p>&copy;2020 Yuan Monos. All rights reserved.</p>
				</div>
			</div>
		);
	}
}
