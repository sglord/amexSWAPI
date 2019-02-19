import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';
import imageFunc from '../imgSources';

const CharacterCard = props => (
	<Card centered raised color="black">
		<Card.Content>
			<Card.Header textAlign="center">{props.char.name}</Card.Header>
		</Card.Content>
		<Image
			// as={Link}
			// to={`/characters/${props.char.id}`}
			centered
			height={320}
			width={230}
			src={imageFunc(props.char.name)}
		/>
	</Card>
);

export default CharacterCard;
  