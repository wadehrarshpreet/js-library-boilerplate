/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable global-require */
const merge = require('babel-merge');
const baseConfig = require('./babelrc.base');

module.exports = () => {
	const config = merge(baseConfig, {
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

	return config;
};
