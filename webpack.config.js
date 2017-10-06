module.exports = {
	entry: [
    'react-hot-loader/patch',
    './src/App.js'
  ],
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader'
		}]
	}
};

// module.exports = {
// 	entry: [
// 	'./src/App.js'
// 	],
// 	output: {
// 		path: __dirname,
// 		filename: 'app.js'
// 	},
// 	module: {
// 		loaders: [{
// 			test: /\.jsx?$/,
// 			exclude: /node_modules/,
// 			loader: 'babel',
// 			query: {
// 				presets: ['es2015', 'react']
// 			}
// 		}]
// 	}
// };
