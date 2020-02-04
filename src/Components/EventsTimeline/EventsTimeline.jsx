import React, { Component } from 'react';

import './EventsTimeline.scss';

export default class EventsTimeline extends Component {
  render() {
	return (
		<div className="events-timeline">
			<div className="events-timeline__line"></div>
			<div className="events-timeline__checkpoint events-timeline__gs"><i className="far fa-clock"></i></div>
			<div className="events-timeline__checkpoint events-timeline__ht">HT</div>
			<div className="events-timeline__checkpoint events-timeline__ft">FT</div> 
			<div className="events-timeline__event events-timeline__event--home events-timeline__event--yellowcard" style={{ left: `${ 10 * 100 / 90 }%` }}><i className="fas fa-file"></i></div>
			<div className="events-timeline__event events-timeline__event--away events-timeline__event--goal" style={{ left: `${ 20 * 100 / 90 }%` }}><i className="fa fa-futbol"></i></div>
			<div className="events-timeline__event events-timeline__event--home events-timeline__event--redcard" style={{ left: `${ 30 * 100 / 90 }%` }}><i className="fas fa-file"></i></div>
			<div className="events-timeline__event events-timeline__event--away events-timeline__event--owngoal" style={{ left: `${ 50 * 100 / 90 }%` }}><i className="fa fa-futbol"></i></div>
		</div>
	);
  }
}
