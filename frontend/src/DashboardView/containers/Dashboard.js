import React, { Component } from 'react';
import TeamList from '../components/TeamList';
import AddTeamForm from '../components/TeamList/AddTeam';

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<AddTeamForm />
				<TeamList />
			</div>
		);
	}
}
