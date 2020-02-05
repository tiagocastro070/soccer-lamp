import React, { Component } from 'react';

import './FixtureThumb.scss';

export default class FixtureThumb extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const classTheme = `fixture-thumb--${this.props.theme}`;
		
		return (
			<a href="" className={`fixture-thumb ${classTheme} d-flex align-items-center justify-content-between`}>
				<div className="fixture-thumb__team d-flex align-items-center justify-content-end">
					<b className="fixture-thumb__team__name">Nome da Equipa</b>
					<img src="https://media.api-football.com/teams/212.png" alt="" className="fixture-thumb__team__badge" />
				</div>
				<div className="fixture-thumb__info d-flex flex-column align-items-center">
					<span>Live *</span>
					<span>game info</span>
				</div>
				<div className="fixture-thumb__team d-flex align-items-center">
					<img src="https://media.api-football.com/teams/212.png" alt="" className="fixture-thumb__team__badge" />
					<b className="fixture-thumb__team__name">Nome da Equipa</b>
				</div>
			</a>
		);
	}
}
