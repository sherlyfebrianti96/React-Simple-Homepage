import React from 'react';
import './../styles/HeaderStyle.scss';
import {Header} from './../components/Header';

export class HeaderContainer extends React.Component {

	render() {
		const greetName = 'Sherly Febrianti';

		return (
			<Header greetName={greetName} />
		);
	}
}
