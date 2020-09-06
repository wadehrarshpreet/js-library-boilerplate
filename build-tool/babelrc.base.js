module.exports = {
	presets: ['@babel/preset-flow'],
	plugins: [
		['@babel/plugin-proposal-object-rest-spread', { loose: true }],
		['@babel/proposal-class-properties', { loose: true }],
		'@babel/transform-runtime',
		'minify-dead-code-elimination',
	],
	exclude: '**/*.{spec,test}.{js,ts}',
};
