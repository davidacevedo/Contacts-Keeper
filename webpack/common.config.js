import webpack from 'webpack';
import path from 'path';

const PATHS = {
  app: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../public')
};

const common = {
  entry: [
    'babel-polyfill',
    PATHS.app,
    'webpack-hot-middleware/client',
    './src/index'
  ],

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/',
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

export default common;