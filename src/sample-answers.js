define(['sample-module'], function(sample) {
	var module = {};

	$.each(sample, function(i, v) {
		module[i] = function() { return v;};
	});

	return module;
});
