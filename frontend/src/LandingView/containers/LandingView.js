import React, { Component } from 'react';
import LogoBanner from '../components/LandingLogoBanner';
import Particles from 'react-particles-js';
import particles from '../../animated/particles.json';
import RespNavBAr from '../../Nav/NavResp';

const styles = {
	position: 'fixed',
	width: ' 100%',
	margin: '0px',
	left: '0px',
	zIndex: '0',
	height: '100%'
};

export default class LandingView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<RespNavBAr />
				<Particles params={particles} style={styles} />
				<LogoBanner />
			</div>
		);
	}
}
