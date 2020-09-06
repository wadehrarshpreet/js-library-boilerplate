/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable global-require */
const merge = require('babel-merge');

module.exports = () =>
	merge(require('./babelrc.base'), {
		plugins: [
			['@babel/plugin-transform-modules-commonjs', { noInterop: true }],
		],
	});
