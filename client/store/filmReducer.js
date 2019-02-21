import axios from 'axios';
import { grabIdFromUrl } from '../../helperFunctions';

const LOAD_FILMS = 'LOAD_FILMS';
const FILM_SUCCESS = 'FILM_SUCCESS';
const FILM_FAILURE = 'FILM_FAILURE';
const REMOVE_FILMS = 'REMOVE_FILMS';

const loadFilm = () => ({
	type: LOAD_FILMS
});

const filmSuccess = films => ({
	type: FILM_SUCCESS,
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
	dispatch(loadFilm());
	try {
		const { data } = await axios.get(`/api/characters/${charId}/films`);
		dispatch(filmSuccess(data));
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
		case LOAD_FILMS:
			return { ...state, isLoading: true };
		case FILM_SUCCESS:
			return {
				...state,
				films: action.films,
				isLoading: false
			};
		case REMOVE_FILMS:
			return [];
		default:
			return state;
	}
}
