import React from 'react';

import './Menu.scss';

export default function Menu() {
  return (
	<div>
		<ul className="menu">
			<li><a href="https://google.com/" className="active"><i className="fa fa-globe-americas"></i> My Stadium</a></li>
			<li>
				<a href="https://google.com/"><i className="fa fa-futbol"></i> Leagues</a>
			</li>
			<li><a href="https://google.com/"><i className="fa fa-shield-alt"></i> Teams</a></li>
			<li><a href="https://google.com/"><i className="fa fa-street-view"></i> Players</a></li>
			<li><a href="https://google.com/"><i className="fa fa-calendar-alt"></i> Fixtures</a></li>
			<li><a href="https://google.com/"><i className="fa fa-chart-bar"></i> Statistics</a></li>
			<li><a href="https://google.com/"><i className="fa fa-sliders-h"></i> Settings</a></li>
		</ul>
	</div>
  );
}
