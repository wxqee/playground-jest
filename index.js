var div = require('./div');

div(2, 1, function(err, data) {
	return console.log('2/1 =', data);
});

div(2, 0, function(err, data) {
	if (err) {
		return console.log('Error, 2/0 =', err);
	}

	return console.log('2/0 =', data);
});

