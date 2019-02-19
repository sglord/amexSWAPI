import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Card, Image } from 'semantic-ui-react';

import CharacterCard from './CharacterCard';

class CharacterList extends Component {
	render() {
		// const { characters } = this.props;
		const characters = [
			{
				name: 'Luke Skywalker',
				url: 'https://swapi.co/api/people/1/'
			},
			{
				name: 'Darth Vader',
				url: 'https://swapi.co/api/people/4/'
			},
			{
				name: 'Obi-wan Kenobi',
				url: 'https://swapi.co/api/people/unknown/'
			},
			{
				name: 'R2-D2',
				url: 'https://swapi.co/api/people/3/'
			}
		];
		return (
			<Grid inverted padded stackable relaxed columns={4}>
				{characters.map(char => {
					return (
						<Grid.Column>
							<CharacterCard char={char} />
						</Grid.Column>
					);
				})}
			</Grid>
		);
	}
}

export default CharacterList;
