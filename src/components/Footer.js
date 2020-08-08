import React from 'react';
import './../styles/FooterStyle.scss';

export const Footer = (props) => {
	return (
		<div className="Footer">
			<div className="Content">
				<p>&copy;2020 {props.greetName}. All rights reserved.</p>
			</div>
		</div>
	);
};
