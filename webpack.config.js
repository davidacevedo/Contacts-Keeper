module.exports = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/public',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}