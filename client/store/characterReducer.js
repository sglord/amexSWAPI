import axios from 'axios';
import { grabIdFromUrl } from '../../helperFunctions';

const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
const CHARACTER_FAILURE = 'CHARACTER_FAILURE';
const GET_SINGLE_CHARACTER = 'GET_SINGLE_CHARACTER';
const REMOVE_SELECTED_CHARACTER = 'REMOVE_SELECTED_CHARACTER';
const CLEAR_ERROR = 'CLEAR_ERROR';

const loadCharacters = () => ({
	type: LOAD_CHARACTERS,
	isLoading: true
});

const getAllCharacters = characters => ({
	type: GET_ALL_CHARACTERS,
	characters
});

const getSingleCharacter = selectedCharacter => ({
	type: GET_SINGLE_CHARACTER,
	selectedCharacter
});

const charactersFailure = error => ({
	type: CHARACTER_FAILURE,
	isLoading: false,
	error: 'Failed to fetch character',
	payload: error
});

export const removeSelectedCharacter = () => ({
	type: REMOVE_SELECTED_CHARACTER
});

export const clearError = () => ({
	type: CLEAR_ERROR
});

export const fetchCharacters = () => async dispatch => {
	dispatch(loadCharacters());
	try {
		const { data } = await axios.get('/api/characters');
		let characters = data.characters.map(character => ({
			...character,
			id: grabIdFromUrl(character.url)
		}));
		dispatch(getAllCharacters(characters));
	} catch (error) {
		dispatch(charactersFailure(error));
	}
};

export const fetchSingleCharacter = charId => async dispatch => {
	dispatch(loadCharacters());
	try {
		const { data } = await axios.get(`/api/characters/${charId}`);
		let character = {
			...data,
			id: charId
		};

		dispatch(getSingleCharacter(character));
	} catch (error) {
		dispatch(charactersFailure(error));
	}
};

let initialState = {
	characters: [],
	selectedCharacter: null,
	isLoading: false,
	error: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_CHARACTERS:
			return { ...state, isLoading: action.isLoading };
		case GET_ALL_CHARACTERS:
			return {
				...state,
				characters: action.characters,
				isLoading: false
			};
		case GET_SINGLE_CHARACTER:
			return {
				...state,
				selectedCharacter: action.selectedCharacter,
				isLoading: false
			};
		case REMOVE_SELECTED_CHARACTER:
			return {
				...state,
				selectedCharacter: null
			};
		case CHARACTER_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.error
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
}
