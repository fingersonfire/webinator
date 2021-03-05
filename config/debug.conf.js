const main_config = require('./main.conf');
const merge = require('deepmerge');

exports.config = merge(main_config.config, {
	baseUrl: 'www.google.com',
	capabilities: [
		{
			maxInstances: 1,
			browserName: 'chrome',
		},
	],
	maxInstances: 1,
	runner: 'local',
	specs: [
		'./specs/debug.spec.js',
	],
}, {clone: false});