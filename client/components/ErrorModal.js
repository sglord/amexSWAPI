import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearError } from '../store/characterReducer';
import { Modal, Button } from 'semantic-ui-react';

class ErrorModal extends Component {
	constructor() {
		super();
	}

	render() {
		const { error } = this.props;

		return (
			<Modal
				open={this.props.error ? true : false}
				dimmer="inverted"
				size={'small'}
				closeOnDimmerClick={true}>
				<Modal.Header>Error</Modal.Header>
				<Modal.Content>
					<p>{error}</p>
				</Modal.Content>
				<Modal.Actions>
					<Button onClick={() => this.props.clearError()}>
						Return to character selection
					</Button>
				</Modal.Actions>
			</Modal>
		);
	}
}

const mapStateToProps = state => {
	return {
		error: state.characterReducer.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		clearError: () => dispatch(clearError())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ErrorModal);
