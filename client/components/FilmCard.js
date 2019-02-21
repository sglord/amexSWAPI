import React from 'react';
import { Card, Divider } from 'semantic-ui-react';

const FilmCard = props => (
	<Card fluid raised color="black">
		<Card.Content>
			<Card.Header textAlign="center">{props.film.title}</Card.Header>
			<Card.Meta>Release Date : {props.film.release_date}</Card.Meta>
			<Card.Description>{props.film.opening_crawl}</Card.Description>
		</Card.Content>
		<Divider hidden />
	</Card>
);

export default FilmCard;
