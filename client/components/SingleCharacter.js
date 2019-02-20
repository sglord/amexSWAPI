import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../store/characterReducer';
import { Loader, Dimmer, Grid } from 'semantic-ui-react';

class SingleCharacter extends Component {
	componentDidMount() {
		this.props.fetchSingleCharacter();
	}
	render() {
		const { isLoading, selectedCharacter } = this.props;

		return <div />;
	}
}

const mapStateToProps = state => {
	console.log(state.characterReducer.selectedCharacter);
	return {
		isLoading: state.characterReducer.isLoading,
		selectedCharacter: {}
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchCharacters: () => dispatch(fetchCharacters())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleCharacter);
