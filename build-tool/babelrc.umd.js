/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable global-require */
const merge = require('babel-merge');

const config = merge(require('./babelrc.base'), {
	presets: [
		[
			'@babel/env',
			{
				modules: false,
				loose: true,
				targets: {
					browsers: ['ie 10', 'ios 7'],
				},
			},
		],
	],
});

module.exports = () => config;
