import React from 'react';
import {
	Button,
	Container,
	Image,
	Header,
	Segment,
	Grid
} from 'semantic-ui-react';
import imageFunc from '../imgSources';
import FilmList from './FilmList';

const SingleCharacter = props => {
	const { handleRemoveSelectedCharacter, selectedCharacter } = props;
	return (
		<div style={{ margin: '1vh 2vw ' }}>
			<Header attached="top" as="h2">
				<Image
					avatar
					size="medium"
					spaced
					height={192}
					width={138}
					src={imageFunc(selectedCharacter.name)}
				/>
				<Header.Content>{selectedCharacter.name}</Header.Content>
			</Header>
			<Segment attached>
				<Grid textAlign="center" stackable celled columns={3}>
					<Grid.Column>Height: {selectedCharacter.height}m</Grid.Column>
					<Grid.Column>Weight: {selectedCharacter.mass}kg</Grid.Column>
					<Grid.Column>Year Born: {selectedCharacter.birth_year}</Grid.Column>
				</Grid>
			</Segment>
			<Segment>
				<FilmList />
			</Segment>
			<Button
				attached
				size="medium"
				onClick={() => {
					handleRemoveSelectedCharacter();
				}}>
				Return to character selection
			</Button>
		</div>
	);
};

export default SingleCharacter;
