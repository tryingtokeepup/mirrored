import React from 'react';
import { Query, Mutation } from 'react-apollo';

import * as m from '../../../constants/mutations';
import * as s from './TeamList.styles';

const createTeam = () => {
	AddTeam();
};

const AddTeam = () => {
	return <Mutation mutation={m.ADD_TEAM}>{<AddTeamForm />}</Mutation>;
};

const AddTeamForm = () => {
	return (
		<form onSubmit={createTeam}>
			<label>
				Team Name:
				<input type="text" name="name" />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default AddTeamForm;
