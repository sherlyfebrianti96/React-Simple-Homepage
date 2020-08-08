import React from 'react';
import {TermAndCondition} from './../components/TermAndCondition';
import './../styles/ProvidedServices.scss';

export class ProvidedServicesContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	getService(service) {
		return (
			<div className="Service">
				<h2>{service.title}</h2>
				<p>{service.content}</p>
			</div>
		);
	}

	render() {
		const services = [
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
		];

		return (
			<div className="Provided-services">
				<div className="Content">
					<div className="Row Highlight">
						<h1>How Can I Help You?</h1>
						<p>Our work then targeted, best practices outcomes social innovation synergy.</p>
						<p>Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale.</p>
					</div>
				</div>
				<div className="Services">
					{this.getService(services[0])}
					{this.getService(services[1])}
					{this.getService(services[2])}
				</div>
				<div className="Services">
					{this.getService(services[3])}
					{this.getService(services[4])}
					{this.getService(services[5])}
				</div>}
				<div className="Clearfix"></div>
			</div>
		);
	}
}
