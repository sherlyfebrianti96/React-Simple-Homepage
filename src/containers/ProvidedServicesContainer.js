import React from 'react';
import {ProvidedServices} from './../components/ProvidedServices';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-solid-svg-icons/faComments";
import {faPaintBrush} from "@fortawesome/free-solid-svg-icons/faPaintBrush";
import {faCubes} from "@fortawesome/free-solid-svg-icons/faCubes";
import {faChartLine} from "@fortawesome/free-solid-svg-icons/faChartLine";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons/faBullhorn";
import {faTasks} from "@fortawesome/free-solid-svg-icons/faTasks";

export class ProvidedServicesContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	getService(service, key) {
		return (
			<div className="Service" key={key}>
				<h2>{service.title}</h2>
				<p>{service.content}</p>
				<div className="Icon">
					<FontAwesomeIcon icon={service.icon} />
				</div>
			</div>
		);
	}

	getServices(services) {
		let servicesElement = [];
		for (let i = 0; i < (services.length / 3); i++) {
			servicesElement.push(
				<div className="Services" key={'services-' + i}>
					{this.getService(services[i + (i * (i + 1))], ('service-' + (i + (i * (i + 1)))))}
					{this.getService(services[i + (i * (i + 1)) + 1], ('service-' + (i + (i * (i + 1)) + 1)))}
					{this.getService(services[i + (i * (i + 1)) + 2], ('service-' + (i + (i * (i + 1)) + 2)))}
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
			icon: faComments,
			title: 'Consult',
			content: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
		},
		{
			icon: faPaintBrush,
			title: 'Design',
			content: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.'
		},
		{
			icon: faCubes,
			title: 'Develop',
			content: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.'
		},
		{
			icon: faBullhorn,
			title: 'Marketing',
			content: 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.'
		},
		{
			icon: faTasks,
			title: 'Manage',
			content: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.'
		},
		{
			icon: faChartLine,
			title: 'Evolve',
			content: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.'
		}
	]
};
