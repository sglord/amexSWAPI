import axios from 'axios';
import { grabIdFromUrl } from '../../helperFunctions';

const GET_CHARACTERS = 'GET_CHARACTERS';
const CHARACTER_SUCCESS = 'CHARACTER_SUCCESS';
const CHARACTER_FAILURE = 'CHARACTER_FAILURE';
const GET_SINGLE_CHARACTER = 'GET_SINGLE_CHARACTER';
// single failure handle

const getCharacters = () => ({
	type: GET_CHARACTERS,
	isLoading: true
});

const charactersSuccess = characters => ({
	type: CHARACTER_SUCCESS,
	isLoading: false,
	characters
});

const charactersFailure = error => ({
	type: CHARACTER_FAILURE,
	isLoading: false,
	error: 'Failure to fetch characters',
	payload: error
});

const getSingleCharacter = selectedCharacter => ({
	type: GET_SINGLE_CHARACTER,
	selectedCharacter
});

export const fetchCharacters = () => async dispatch => {
	dispatch(getCharacters());
	try {
		const { data } = await axios.get('/api/characters');
		console.log(data.characters);
		let characters = data.characters.map(character => ({
			name: character.name,
			url: character.url,
			id: grabIdFromUrl(character.url)
		}));
		console.log(characters);
		dispatch(charactersSuccess(characters));
	} catch (error) {
		dispatch(charactersFailure(error));
	}
};

export const fetchSingleCharacter = charId => async dispatch => {
	dispatch(getCharacters());
	try {
    const { data } = await axios.get(`/api/characters/${charId}`);
    
	} catch (error) {}
};

let initialState = {
	characters: [],
	selectedCharacter: {},
	isLoading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CHARACTERS:
			return { ...state, isLoading: action.isLoading };
		case CHARACTER_SUCCESS:
			return {
				...state,
				characters: action.characters,
				isLoading: action.isLoading
			};
		case GET_SINGLE_CHARACTER:
			return {
				...state,
				selectedCharacter: action.selectedCharacter
			};
		default:
			return state;
	}
}

// run the first one in component did mount and console log data and results. extract Id and add it to the data
// need to update the character

// need to combine reducers, set up store, and add function to the react components

// Character list => redux GETCHARACTERS => api/characters
// on click => redux GETSINGLECHARACTER => api/character/${char.id}/ add key from the id

// need to set up redux everywhere top to bottom
// need to finish setting up router
