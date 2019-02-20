'use strict';

const router = require('express').Router();
const axios = require('axios');
const characters = require('../../characters.json');
const { getFilmData } = require('../../helperFunctions');

router.get('/characters', (req, res) => {
	res.send(characters);
});

router.get('/characters/:id', async (req, res, next) => {
	try {
		const { data } = await axios.get(
			`https://swapi.co/api/people/${req.params.id}/`
		);
		let { name, birth_year, hair_color, height, mass } = data;
		let character = {
			name,
			birth_year,
			hair_color,
			height,
			mass
		};
		res.send(character);
	} catch (error) {
		next(error);
	}
});

router.get('/characters/:id/films', async (req, res, next) => {
	try {
		const { data } = await axios.get(
			`https://swapi.co/api/people/${req.params.id}/`
		);
		const { films } = data;
		try {
			let filmResponse = await getFilmData(films);
			console.log(filmResponse);
			res.send(filmResponse);
		} catch (error) {
			console.error(error);
			res.send('Error: Could not load films!');
		}
	} catch (error) {
		next(error);
	}
});
module.exports = router;
