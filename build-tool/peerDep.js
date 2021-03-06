const spawn = require('cross-spawn');

const { pkg } = require('./utils');

const peerDependencies = pkg.peerDependencies || {};
const peerDeps = Object.keys(peerDependencies);
const packageNeedForDevelopment = peerDeps.map(
	(name) => `${name}@${peerDependencies[name]}`
);
if (packageNeedForDevelopment.length < 1) {
	console.info('No Peer dependencies found');
	process.exit(0);
}
console.log(`installing, ${packageNeedForDevelopment}`);
const result = spawn.sync(
	'yarn',
	['add', ...packageNeedForDevelopment, '-P', '--ignore-scripts'],
	{
		stdio: 'inherit',
	}
);

process.exit(result.status);
