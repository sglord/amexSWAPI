// 'use strict';

// const { resolve } = require('path');

// module.exports = {
// 	entry: ['babel-polyfill', './client/main'],
// 	output: {
// 		path: __dirname,
// 		filename: './public/bundle.js'
// 	},
// 	mode: 'development',
// 	context: __dirname,
// 	devtool: 'source-map',
// 	resolve: {
// 		extensions: ['.js', '.jsx']
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /jsx?$/,
// 				include: resolve(__dirname, './client'),
// 				loader: 'babel-loader'
// 			}
// 		]
// 	}
// };

'use strict';

const { resolve } = require('path');

module.exports = {
	entry: ['babel-polyfill', './client/main'],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /jsx?$/,
				exclude: /node_modules/,
				include: resolve(__dirname, './client'),
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react', 'stage-2']
				}
			}
		]
	}
};
