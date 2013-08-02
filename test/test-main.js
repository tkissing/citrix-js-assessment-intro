var tests = [],
	testFileRE = /Tests\.js$/;
    

requirejs.config({
	// Karma serves files from '/base'
	baseUrl: '/base/src',

	paths: {
		'jquery': '../vendor/jquery-2.0.3',
		'chai': '../node_modules/chai/chai'
	},
});

// DON'T CHANGE ANYTHING BELOW THIS LINE

for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (testFileRE.test(file)) {
			tests.push(file);
		}
	}
};

require(tests, window.__karma__.start);
