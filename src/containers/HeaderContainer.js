import React from 'react';
import {Header} from './../components/Header';

export class HeaderContainer extends React.Component {

	render() {
		return (
			<Header greetName={this.props.greetName} />
		);
	}
}
