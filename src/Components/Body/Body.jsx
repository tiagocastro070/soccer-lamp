import React from 'react';
import api from '../../services/Api.js';
import Checkbox from '../Forms/Checkbox/Checkbox';
import TeamStanding from '../TeamStanding/TeamStanding';

import './Body.scss';
import FixtureThumb from '../FixtureThumb/FixtureThumb.jsx';
import EventsTimeline from '../EventsTimeline/EventsTimeline.jsx';

export default function Body() {
	return (
		<>

			{/* TOP LEAGUES FOR QUICK ACCESS */}
			<div className="d-flex align-items-center justify-content-around col">
				<img src="https://media.api-football.com/leagues/2.png" alt="" style={{ maxWidth: '100px' }} />
				<img src="https://media.api-football.com/leagues/2.png" alt="" style={{ maxWidth: '100px' }} />
				<img src="https://media.api-football.com/leagues/2.png" alt="" style={{ maxWidth: '100px' }} />
				<img src="https://media.api-football.com/leagues/2.png" alt="" style={{ maxWidth: '100px' }} />
				<img src="https://media.api-football.com/leagues/2.png" alt="" style={{ maxWidth: '100px' }} />
				<img src="https://media.api-football.com/leagues/2.png" alt="" style={{ maxWidth: '100px' }} />
				<img src="https://media.api-football.com/leagues/2.png" alt="" style={{ maxWidth: '100px' }} />
				<img src="https://media.api-football.com/leagues/2.png" alt="" style={{ maxWidth: '100px' }} />
			</div>

			
			{/* HOMEPAGE TOP PICKS */}
			<div className="row">
				<div className="clearfix"></div>
				
				{/* TOP LEAGUES - CURRENT DAY FIXTURES (5 TO 6 LEAGUES) */}
				<div className="col-9">
					<div className="col text-center">Today</div>
					<div className="clearfix"></div>
					<div className="row">
						<div className="col-3">
							<img src="https://media.api-football.com/leagues/2.png" alt=""/>
							<br/>
							View league details 
						</div>
						<div className="col-7 offset-1">
							<FixtureThumb minimal={true} />
							<FixtureThumb />
							<FixtureThumb />
							<FixtureThumb />
							<FixtureThumb />
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<img src="https://media.api-football.com/leagues/2.png" alt=""/>
							<br/>
							View league details 
						</div>
						<div className="col-7 offset-1">
							<FixtureThumb minimal={true} />
							<FixtureThumb />
							<FixtureThumb />
							<FixtureThumb />
							<FixtureThumb />
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<img src="https://media.api-football.com/leagues/2.png" alt=""/>
							<br/>
							View league details 
						</div>
						<div className="col-7 offset-1">
							<FixtureThumb minimal={true} />
							<FixtureThumb />
							<FixtureThumb />
							<FixtureThumb />
							<FixtureThumb />
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<img src="https://media.api-football.com/leagues/2.png" alt=""/>
							<br/>
							View league details 
						</div>
						<div className="col-7 offset-1">
							<FixtureThumb minimal={true} />
							<FixtureThumb />
							<FixtureThumb />
							<FixtureThumb />
							<FixtureThumb />
						</div>
					</div>

					<hr/>
					
				</div>

				{/* MY FAVOURITE TEAM QUICK INFOS AND ACCESS */}
				<div className="col-3">
					<div className="card card-body card-body--grad">
						<div className="text-center">
							<img src="https://media.api-football.com/teams/212.png" alt="" />
							<h2>F.C. Porto</h2>
							Próximas Jornadas
							<br/>
							Detalhes Clube
							<div>
								<div className="team-fixture">
									<FixtureThumb theme="minimal" />
									<FixtureThumb theme="minimal" />
									<FixtureThumb theme="minimal" />
									<FixtureThumb theme="minimal" />
									<FixtureThumb theme="minimal" />
									<FixtureThumb theme="minimal" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* HOMEPAGE TOP PICKS ends */}

			{/* LEAGUE PAGE DETAILS */}
			<div className="row">
				<div className="col-9">
					<div>
						<div className="row">
							<div className="col-3">
								<img src="https://media.api-football.com/leagues/2.png" alt=""/>
							</div>
							<div className="col-9">
								England
								<h3>Premier League</h3>
								<select name="" id="">
									<option value="">19/20</option>
									<option value="">18/19</option>
									<option value="">17/18</option>
								</select>
							</div>
						</div>
						<table style={{ width: '100%', marginTop: '50px', borderCollapse: 'collapse', textAlign: 'center' }}>
							<thead style={{ color: '#aaa', fontSize: '13px' }}>
								<tr>
									<td colSpan="3"></td>
									<td>P</td>
									<td>W</td>
									<td>D</td>
									<td>L</td>
									<td>Goals</td>
									<td>Form</td>
									<td>Points</td>
								</tr>
							</thead>
							<tbody>
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
								<TeamStanding />
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<hr/>
			
			<div className="row">
				<div className="col-9">
					<div className="card card-body">
						<div className="d-flex align-items-center justify-content-center">
							<div>
								<img src="https://media.api-football.com/teams/212.png" alt="" />
								<b className="d-block">Team 1</b>
							</div>
							vs
							<div>
								<img src="https://media.api-football.com/teams/131.png" alt="" />
								<b className="d-block">Team 2</b>
							</div>
						</div>
						12 de Fevereiro 2020
						<b className="d-block">Champions League</b>
					</div>
					<hr/>
					<div className="text-center">
						{/* GAME EVENTS HERE */}
						<EventsTimeline />
					</div>
					<hr/>
					<form>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
							<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1" />
						</div>
						<Checkbox id="example-input">Check me out</Checkbox>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
					<div className="mb-5"></div>
					<div className="card card-body">
						<form>
							<div className="form-group">
								<label htmlFor="exampleInputEmail2">Email address</label>
								<input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
								<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword2">Password</label>
								<input type="password" className="form-control" id="exampleInputPassword2" />
							</div>
							<Checkbox id="example-input-2">Check me out</Checkbox>
							<button className="btn btn-primary loading">Submit</button>
						</form>
					</div>
				</div>
				<div className="col-3">
					<h5>Statistical Predictions for this game</h5>
					<small dangerouslySetInnerHTML={{ __html: 'Request URL: https://api-football-v1.p.rapidapi.com/v2/predictions/{fixture_id}' }}></small>
					<p>Para predições automáticas do jogo. Golos, vencedor, etc</p>
				</div>
			</div>
		</>
	);
}
