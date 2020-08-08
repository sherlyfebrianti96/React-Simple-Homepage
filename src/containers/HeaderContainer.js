import React from 'react';
import {Header} from './../components/Header';

export class HeaderContainer extends React.Component {

	render() {
		const greetName = 'Sherly Febrianti';

		return (
			<Header greetName={greetName} />
		);
	}
}
