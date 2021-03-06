import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	fetchCharacters,
	fetchSingleCharacter,
	removeSelectedCharacter
} from '../store/characterReducer';
import { Dimmer, Loader } from 'semantic-ui-react';

import SingleCharacter from './SingleCharacter';
import CharacterList from './CharacterList';
import ErrorModal from './ErrorModal';

class Views extends Component {
	constructor() {
		super();
		this.handleCharacterCardClick = this.handleCharacterCardClick.bind(this);
		this.handleRemoveSelectedCharacter = this.handleRemoveSelectedCharacter.bind(
			this
		);
	}
	componentDidMount() {
		this.props.fetchCharacters();
	}
	handleCharacterCardClick(charId) {
		this.props.fetchSingleCharacter(charId);
	}
	handleRemoveSelectedCharacter() {
		this.props.removeSelectedCharacter();
	}

	render() {
		const {
			characters,
			selectedCharacter,
			loadingCharacter,
			loadingFilm
		} = this.props;

		return (
			<div>
				{selectedCharacter === null ? (
					<CharacterList
						characters={characters}
						handleCharacterCardClick={this.handleCharacterCardClick}
					/>
				) : (
					<SingleCharacter
						selectedCharacter={selectedCharacter}
						handleRemoveSelectedCharacter={this.handleRemoveSelectedCharacter}
					/>
				)}
				<Dimmer active={loadingCharacter}>
					<Loader size="massive">Loading Characters...</Loader>
				</Dimmer>
				<Dimmer active={loadingFilm}>
					<Loader size="massive">Loading films...</Loader>
				</Dimmer>
				<ErrorModal />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		characters: state.characterReducer.characters,
		selectedCharacter: state.characterReducer.selectedCharacter,
		loadingCharacter: state.characterReducer.isLoading,
		loadingFilm: state.filmReducer.isLoading,
		error: state.characterReducer.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchCharacters: () => dispatch(fetchCharacters()),
		fetchSingleCharacter: charId => dispatch(fetchSingleCharacter(charId)),
		removeSelectedCharacter: () => dispatch(removeSelectedCharacter())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Views);
