import React from 'react';
import MessageBoard from '../components/MessageBoard';
import ActivityTimeline from '../components/ActivityTimeline';
import mediaQueryFor from '../../_global_styles/responsive_querie';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
	root: {
		flexGrow: 1,
		backgroundColor: 'transparent',
		boxShadow: 'none',
		marginBottom: '20px'
	},
	label: {
		color: 'white'
	},
	tabsIndicator: {
		backgroundColor: '#FAED26'
	}
};

const MsgContainer = styled.div`
	margin: 90px auto;

	${mediaQueryFor.xsDevice`
		width: 100%;
	`}

	${mediaQueryFor.smDevice`
      padding:0px;
      width:100%;
      border-width:4px;
  `}
`;

const StyledPaper = styled(Paper)`
	${mediaQueryFor.xsDevice`
		max-width: 376px;
	`}
`;

class MessageBoardContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;

		return (
			<MsgContainer>
				<StyledPaper classes={{ root: classes.root }}>
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						textColor="primary"
						classes={{ indicator: classes.tabsIndicator }}
						centered
					>
						<Tab classes={{ label: classes.label }} label="Message Board" />
						<Tab classes={{ label: classes.label }} label="Activity Timeline" />
					</Tabs>
				</StyledPaper>
				{!this.state.value ? (
					<MessageBoard
						currentUser={this.props.currentUser}
						team={this.props.match.params.team}
					/>
				) : (
					<ActivityTimeline
						{...this.props}
						team={this.props.match.params.team}
					/>
				)}
			</MsgContainer>
		);
	}
}

MessageBoardContainer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MessageBoardContainer);
