function div(a, b, cb) {
	if (b === 0) {
		return cb('b should not be zero', null);
	}

	cb(null, a / b);
}

module.exports = div;
