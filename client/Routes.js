import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import SingleCharacter from './components/SingleCharacter';

class Routes extends Component {
	componentDidMount() {}

	render() {
		return (
			<Switch>
				<Route exact path="/" component={CharacterList} />
				<Route exact path="/characters" component={CharacterList} />
				<Route path="/characters/:id" component={SingleCharacter} />
			</Switch>
		);
	}
}

export default withRouter(Routes);
