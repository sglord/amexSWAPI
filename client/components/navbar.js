import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
const Navbar = () => (
	<div>
		<Menu inverted size="massive">
			<Menu.Item name="StarWars" icon="space shuttle" />
			<Menu.Item position="right" name="About" icon="file alternate outline" />
		</Menu>
	</div>
);

export default Navbar;
