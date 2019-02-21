import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../store/characterReducer';
import { Loader, Dimmer, Grid } from 'semantic-ui-react';

import CharacterCard from './CharacterCard';

const CharacterList = props => {
	const { characters, handleCharacterCardClick } = props;
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
							<CharacterCard
								key={char.id}
								char={char}
								handleCharacterCardClick={handleCharacterCardClick}
							/>
						</Grid.Column>
					);
				})}
			</Grid>
		</div>
	);
};

export default CharacterList;
