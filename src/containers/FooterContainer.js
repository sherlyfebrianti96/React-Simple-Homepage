import React from 'react';
import {Footer} from './../components/Footer';

export class FooterContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Footer greetName={this.props.greetName}/>
		);
	}
}
