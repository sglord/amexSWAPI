import axios from 'axios';
import { grabIdFromUrl } from '../../helperFunctions';

const GET_FILMS = 'GET_FILMS';
const FILM_SUCCESS = 'FILM_SUCCESS';
const FILM_FAILURE = 'FILM_FAILURE';
const REMOVE_FILMS = 'REMOVE_FILMS';

const getFilm = () => ({
	type: GET_FILMS,
	isLoading: true
});

const filmSuccess = films => ({
	type: FILM_SUCCESS,
	isLoading: false,
	films
});

const filmFailure = error => ({
	type: FILM_FAILURE,
	isLoading: false,
	error: 'Failure to fetch films',
	payload: error
});

export const removeFilm = () => ({
	type: REMOVE_FILMS
});

export const fetchCharacterFilms = charId => async dispatch => {
	dispatch(getFilm());
	try {
		const { data } = await axios.get(`/api/characters/${charId}/films`);
		let films = data.map(film => ({
			...film,
			id: grabIdFromUrl(film.url)
		}));
		dispatch(filmSuccess(films));
	} catch (error) {
		dispatch(filmFailure(error));
	}
};

let initialState = {
	films: [],
	isLoading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_FILMS:
			return { isLoading: action.isLoading };
		case FILM_SUCCESS:
			return {
				chracters: action.films,
				isLoading: action.isLoading
			};
		case REMOVE_FILMS:
			return [];
		default:
			w;
			return state;
	}
}
