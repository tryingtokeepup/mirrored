import React, { Component } from 'react';
import { Switch, withRouter } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import LandingView from './LandingView/containers/LandingView';
import MessageBoard from './MessageBoard/components/MessageBoard';
import Dashboard from './DashboardView/containers/Dashboard';
import SettingsView from './SettingsView/containers/SettingsView';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<PublicRoute exact path="/" component={LandingView} />
					<PrivateRoute path="/:team/home" component={MessageBoard} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/settings" component={SettingsView} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
