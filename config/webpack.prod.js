var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var path = require('path');
const ENV = process.env.NODE_ENV = process.env.ENV = 'dev';

const clientConfig = {
    devtool: 'source-map', 
    target: 'web',
    entry: {
      'polyfills': './src/client/polyfills.ts',
      'vendor': './src/client/vendor.ts',
      'app': './src/client/main.ts'
    },
    output: {
      path: helpers.root('dist/dev/client'),
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: [
            { loader: 'ts-loader' } , 
            { loader: 'angular2-template-loader' }
          ]
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        {
          test: /\.css$/,
          include: helpers.root('src/client', 'app'),
          loader: 'raw-loader'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
      new webpack.DefinePlugin({
        'process.env': {
          'ENV': JSON.stringify(ENV)
        }
      }),
      new webpack.ContextReplacementPlugin( // Workaround for angular/angular#11580
        /angular(\\|\/)core(\\|\/)@angular/, // The (\\|\/) piece accounts for path separators in *nix and Windows
        helpers.root('./src/client'), // location of your src
        {} // a map of your routes
      ),
      new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'] }),
      new HtmlWebpackPlugin({
        template: 'src/client/index.html'
      })
    ]
};

module.exports = clientConfig;