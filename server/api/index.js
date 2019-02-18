'use strict';

const router = require('express').Router();
const axios = require('axios');
const path = require('path');
const fs = require('fs');

router.get('/characters', async (req, res, next) => {
	try {
		let characters;

		fs.readFile(
			path.join(__dirname, '../../characters.json'),
			'utf-8',
			(err, data) => {
				if (err) {
					throw err;
				}
				console.log('data', data);
				res.send(data);
			}
		);
	} catch (error) {
		next(error);
	}
});

router.get('/characters/:id', async (req, res, next) => {
	try {
		const { data } = await axios.get(
			`https://swapi.co/api/people/${req.params.id}/`
		);
		const { films } = data;
		try {
			let filmResponse = await getFilmData(films);
			res.send(filmResponse);
		} catch (error) {
			console.error(error);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;

const getFilmData = async filmsArr => {
	let unloadedFilms = [];
	let loadedFilms = [];
	let filmData;

	for (let film of filmsArr) {
		try {
			let { data } = await axios.get(`${film}`);
			filmData = data;
		} catch (error) {
			unloadedFilms.push(error);
		}
		loadedFilms.push(filmData.title);
	}

	if (!loadedFilms.length) {
		throw new Error('Failed to load films');
	} else {
		return {
			loadedFilms,
			unloadedFilms
		};
	}
};
