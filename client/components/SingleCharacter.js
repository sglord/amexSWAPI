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
					<Grid.Column>
						<p>Height: {selectedCharacter.height}m</p>
					</Grid.Column>
					<Grid.Column>
						<p>Weight: {selectedCharacter.mass}kg</p>
					</Grid.Column>
					<Grid.Column>
						<p>Year Born: {selectedCharacter.birth_year}</p>
					</Grid.Column>
				</Grid>
				<Button
					size="medium"
					onClick={() => {
						handleRemoveSelectedCharacter();
					}}>
					Return to character selection
				</Button>
			</Segment>
			{/* <Segment>
				<FilmList.js />
			</Segment> */}
		</div>
	);
};

export default SingleCharacter;
