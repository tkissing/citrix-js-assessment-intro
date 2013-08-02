define(['jquery'], function($) {
	var module = {};

	$.each(['foo', 'bar'], function(i, v) {
		module[v] = v;
	});

	return module;
});
