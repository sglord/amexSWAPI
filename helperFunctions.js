const axios = require('axios');

const getFilmData = async filmsArr => {
	let films = [];
	let filmData;

	for (let film of filmsArr) {
		try {
			let { data } = await axios.get(`${film}`);
			let {
				title,
				episode_id,
				opening_crawl,
				director,
				producer,
				release_date
			} = data;

			let filmData = {
				title,
				episode_id,
				release_date: formatDate(release_date),
				director,
				producer,
				opening_crawl
			};

			films.push(filmData);
		} catch (error) {
			console.error(error);
			next(error);
		}
	}

	if (!films.length) {
		throw new Error('Failed to load films');
	} else {
		return films;
	}
};

// this also accounts for other api routes that have double digit ids in them. This also allows the 'unknown' ID of obi wan to pass through without checks for number or not.
const grabIdFromUrl = url => {
	let slashIndex = url.slice(0, -1).lastIndexOf('/');
	let id = url.substr(slashIndex + 1).slice(0, -1);

	return id;
};

const formatDate = dateString => {
	let date = new Date(dateString);

	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	return date.toLocaleDateString('en-US', options);
};

module.exports = {
	getFilmData,
	grabIdFromUrl
};
