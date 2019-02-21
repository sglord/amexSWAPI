const axios = require('axios');

const getFilmData = async filmsArr => {
	let unloadedFilms = [];
	let loadedFilms = [];

	for (let film of filmsArr) {
		try {
			let { data } = await axios.get(`${film}`);
				
		} catch (error) {
			unloadedFilms.push(error);
		}

		loadedFilms.push(filmData);
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

// this also accounts for other api routes that have double digit ids in them. This also allows the 'unknown' ID of obi wan to pass through without checks for number or not.
const grabIdFromUrl = url => {
	let slashIndex = url.slice(0, -1).lastIndexOf('/');
	//let slashIndex = str1.lastIndexOf('/')
	let id = url.substr(slashIndex + 1).slice(0, -1);

	return id;
};

module.exports = {
	getFilmData,
	grabIdFromUrl
};
