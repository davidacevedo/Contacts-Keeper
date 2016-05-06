var path = require('path');

const PATHS = {
	app: path.join(__dirname, 'src'),
};

module.exports = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/public',
		filename: "bundle.js"
	},

	resolve: {
		extensions: ['', '.jsx', '.js', '.json', '.scss'],
		modulesDirectories: ['node_modules', PATHS.app],
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}, {
				test: /\.scss?$/,
				loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass',
			}
		]
	}
};