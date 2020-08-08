import React from 'react';
import './../styles/HeaderStyle.scss';

export class HeaderContainer extends React.Component {

	render() {
		const greetName = 'Sherly Febrianti';

		return (
			<div className="Header">
				<div className="Logo">
					<img src={require('./../assets/y-logo-white.png')} />
				</div>
				<div className="Greets">
					<h1>Hello! I'm {greetName}</h1>
					<h2>Consult, Design, and Develop Websites</h2>
					<p>
						<span>Have something great in mind?</span>
						<span>Feel free to contact me.</span>
					</p>
					<p>I'll help you to make it happen.</p>
					<button>Let's Make Contact</button>
				</div>
			</div>
		);
	}
}
