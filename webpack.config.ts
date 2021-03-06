import * as webpack from 'webpack';
import { resolve } from 'path';
import { AotPlugin } from '@ngtools/webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { stats } from './config/webpack/webpack.helpers';

export = function (webpackEnvOptions, webpackOptions) {

	let config: webpack.Configuration = {
		entry: {
			main: './demo/main.ts'
		},
		output: {
			path: resolve(__dirname, './', './dist'),
			filename: '[name].bundle.js'
		},
		resolve: {
			extensions: ['.js', '.ts', '.json']
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					loader: '@ngtools/webpack'
				},
				{
					test: /\.html$/,
					loader: 'raw-loader'
				},
				{
					test: /\.scss$/,
					include: [
						resolve(__dirname, './', './demo/app')
					],
					use: [
						{
							loader: 'raw-loader'
						},
						{
							loader: 'sass-loader'
						}
					]
				},
			]
		},
		devtool: 'inline-source-map',
		stats: stats,
		plugins: [
			new AotPlugin({
				tsConfigPath: resolve(__dirname, './', './demo/tsconfig.demo.json'),
				skipCodeGeneration: true
			}),
			new HtmlWebpackPlugin({
				template: resolve(__dirname, './', './demo/index.html')
			})
		],
		devServer: {
			publicPath: '/',
			contentBase: resolve(__dirname, './', './demo'),
			stats: stats
		}
	};

	return config;
};
