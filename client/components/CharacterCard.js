import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Image, Divider } from 'semantic-ui-react';
import imageFunc from '../imgSources';

const CharacterCard = props => (
	<Card
		// as={Link}
		// to={'/'}
		link
		fluid
		raised
		color="black"
		onClick={() => console.log(props.char)}>
		<Card.Content>
			<Card.Header textAlign="center">{props.char.name}</Card.Header>
		</Card.Content>
		<Image
			centered
			spaced
			height={320}
			width={230}
			src={imageFunc(props.char.name)}
		/>
		<Divider hidden />
	</Card>
);

export default CharacterCard;
