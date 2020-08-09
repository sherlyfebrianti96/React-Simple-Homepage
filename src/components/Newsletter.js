import React from 'react';
import '../styles/NewsletterStyle.scss';

export const Newsletter = (props) => {
	return (
		<div className="Newsletter-wrapper">
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
				<div className="Newsletter-close" onClick={props.handleCloseNewsletter}>X</div>
			</div>
		</div>
	);
};
