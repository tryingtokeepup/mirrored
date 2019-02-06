import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { StyledLink, TextIMG, RespNav } from './styles/index';
import { Spin } from 'react-burgers';
import textLogo from '../assets/TH_text_filled.svg';

const navStyle = {
	width: '100%',
	display: 'flex',
	flexFlow: 'row',
	justifyContent: 'space-between',
	backgroundColor: 'rgba(0,0,0,0)'
};

export default class AppNavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<div>
				<RespNav>
					<Navbar expand="md">
						<TextIMG className="text-img" src={textLogo} />
						<NavbarToggler onClick={this.toggle}>
							<Spin active={this.state.isOpen} color="#fff" />
						</NavbarToggler>
						<Collapse isOpen={this.state.isOpen} navbar>
							{/* <BtnContainer> */}
							<Nav className="ml-auto" navbar>
								<NavItem>
									<StyledLink to="/dashboard">Dashboard</StyledLink>
								</NavItem>
								<NavItem>
									<StyledLink to="/settings">Settings</StyledLink>
								</NavItem>
								<NavItem>
									<StyledLink to="/" onClick={this.props.handleLogout}>
										Logout
									</StyledLink>
								</NavItem>
							</Nav>
							{/* </BtnContainer> */}
						</Collapse>
					</Navbar>
				</RespNav>
			</div>
		);
	}
}

const BtnContainer = styled.div`
	max-width: 400px;
	width: 100%;
	display: flex;
	flex-flow: row;
`;

// const Nav = props => {
// 	return (
// 		<NavBar>
// 			<TextIMG alt={'TeamHome banner'} src={textLogo} />
// 			<BtnContainer>
// 				<StyledLink to="/dashboard">Dashboard</StyledLink>
// 				<StyledLink to="/settings">Settings</StyledLink>
// 				<StyledLink to="/" onClick={props.handleLogout}>
// 					Logout
// 				</StyledLink>
// 			</BtnContainer>
// 		</NavBar>
// 	);
// };

// export default Nav;
