const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Webpack = require("webpack");

const isProd = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  context: __dirname,
	devtool: 'source-map',
  entry: {
		logger: './src/index.js',
	},
	module: {
	  loaders: [
      {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel',
	      query: {
	        presets: ['es2015'],
	      },
	    },
	  ],
	},
  output: {
    path: __dirname,
    filename: isProd ? '[name].min.js' : '[name].js',
		sourceMapFilename: '[name].sourcemap.js',
		library: 'Logger',
		libraryTarget: 'umd',
	},
  plugins: isProd ? [
    new Webpack.optimize.UglifyJsPlugin({ minimize: false }),
  ] : [],
};
