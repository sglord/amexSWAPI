import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../store/characterReducer';
import { Loader, Dimmer, Grid } from 'semantic-ui-react';

import CharacterCard from './CharacterCard';

class CharacterList extends Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchCharacters();
	}

	render() {
		const { characters, isLoading } = this.props;
		return (
			<div>
				<Grid
					verticalAlign="bottom"
					padded
					stackable
					doubling
					relaxed
					columns={4}>
					{characters.map(char => {
						return (
							<Grid.Column>
								<CharacterCard key={char.id} char={char} />
							</Grid.Column>
						);
					})}
				</Grid>
				<Dimmer active={isLoading}>
					<Loader size="massive">Loading</Loader>
				</Dimmer>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state.characterReducer.characters);
	return {
		characters: state.characterReducer.characters,
		isLoading: state.characterReducer.isLoading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchCharacters: () => dispatch(fetchCharacters())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CharacterList);

// click on character
// directs to character/id page
// pulls extra character information to display right away inteh single character page
// then loads the film list and film components within the isngle character page
