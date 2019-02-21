import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterFilms } from '../store/filmReducer';
import { Loader, Dimmer, Grid } from 'semantic-ui-react';

import FilmCard from './FilmCard';

class FilmList extends Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchCharacterFilms(this.props.selectedCharacter.id);
	}

	render() {
		console.log(this.props.films);
		const { films } = this.props;
		return (
			<div>
				<Grid
					verticalAlign="bottom"
					padded
					stackable
					doubling
					relaxed
					stretched
					columns={1}>
					{films.map(film => {
						return (
							<Grid.Column key={film.episode_id}>
								<FilmCard
									key={film.episode_id}
									film={film}
									// handleCharacterCardClick={handleCharacterCardClick}
								/>
							</Grid.Column>
						);
					})}
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedCharacter: state.characterReducer.selectedCharacter,
		films: state.filmReducer.films
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchCharacterFilms: charId => dispatch(fetchCharacterFilms(charId))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilmList);
