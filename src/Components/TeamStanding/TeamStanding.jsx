import React, { Component } from 'react';

import './TeamStanding.scss';

export default class TeamStanding extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<tr className="team-standing">
				<td className="team-standing__position">
					{/* Club on Highest Promotion */}
					{ this.props.promoteBlue ? <span className="team-standing__position__desc team-standing__position__desc--onblue"></span> : null }
					{/* Club on Promotion */}
					{ this.props.promoteGreen ? <span className="team-standing__position__desc team-standing__position__desc--onblue"></span> : null }
					{/* Club on Relegation */}
					{ this.props.promoteRed ? <span className="team-standing__position__desc team-standing__position__desc--onblue"></span> : null }
					<span className="team-standing__position__desc team-standing__position__desc--onblue"></span>
					1
				</td>
				<td className="team-standing__badge"><img src="https://media.api-football.com/teams/212.png" alt="" /></td>
				<td className="team-standing__name">F.C. Porto</td>
				<td className="team-standing__numbers">20</td>
				<td className="team-standing__numbers">18</td>
				<td className="team-standing__numbers">1</td>
				<td className="team-standing__numbers">1</td>
				<td className="team-standing__numbers">39:19</td>
				<td className="team-standing__form">
					<span className="team-standing__form__victory">V</span>
					<span className="team-standing__form__victory">V</span>
					<span className="team-standing__form__victory">V</span>
					<span className="team-standing__form__draw">D</span>
					<span className="team-standing__form__lost">L</span>
				</td>
				<td className="team-standing__points">51</td>
			</tr>
		);
	}
}
