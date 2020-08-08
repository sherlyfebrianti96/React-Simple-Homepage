import React from 'react';
import {ProvidedServices} from './../components/ProvidedServices';
import './../styles/ProvidedServices.scss';

export class ProvidedServicesContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	getService(service, key) {
		return (
			<div className="Service" key={key}>
				<h2>{service.title}</h2>
				<p>{service.content}</p>
			</div>
		);
	}

	getServices(services) {
		let servicesElement = [];
		let count = 0;
		for (let i = 0; i < (services.length / 3); i++) {
			servicesElement.push(
				<div className="Services" key={'services-' + i}>
					{this.getService(services[i], ('service-' + count++))}
					{this.getService(services[i + 1], ('service-' + count++))}
					{this.getService(services[i + 2], ('service-' + count++))}
				</div>
			);
		}

		return servicesElement;
	}

	render() {
		return (
			<ProvidedServices getServices={this.getServices(this.props.services)} />
		);
	}
}

ProvidedServicesContainer.defaultProps = {
	services: [
		{
			title: 'Consult',
			content: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
		},
		{
			title: 'Design',
			content: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.'
		},
		{
			title: 'Develop',
			content: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.'
		},
		{
			title: 'Marketing',
			content: 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.'
		},
		{
			title: 'Manage',
			content: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.'
		},
		{
			title: 'Evolve',
			content: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.'
		}
	]
};
