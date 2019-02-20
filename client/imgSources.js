let characterImages = {
	'Luke Skywalker':
		'https://i.pinimg.com/originals/e5/7c/db/e57cdba4e5f6c01553c025496df977c4.jpg',
	'Darth Vader': 'http://i.imgur.com/CHNJ1tY.jpg',
	'Obi-wan Kenobi':
		'https://i.pinimg.com/236x/af/bf/be/afbfbec6432f2da2b7db03eb751bdd42--trading-cards-jedi-knight.jpg?b=t',
	'R2-D2':
		'https://i.pinimg.com/originals/3d/c4/64/3dc464d8526c853da8cff3f1858b4bbc.jpg'
};

const imageFunc = name => {
	return characterImages[`${name}`];
};

module.exports = imageFunc;
