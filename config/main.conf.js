exports.config = {
	bail: 0,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
	framework: 'mocha',
	logLevel: 'silent',
	mochaOpts: {
		ui: 'bdd',
		timeout: 3000000000,
		compilers: ['js:@babel/register'],
	},
	reporter: ['spec'],
	services: ['selenium-standalone'],
	suites: {
		all: [
			'./specs/*'
		],
	},
	sync: true,
	waitforTimeout: 10000,
	beforeSession: function (config, capabilities, specs) {
		require('@babel/register');
	},
	onComplete: function(exitCode) {
		console.log('// Test execution has completed //');
	},
	onPrepare: function (config, capabilities) {
		console.log('// Test execution has started //');
	},
}