var div = require('./div');

test('div cb should be called', () => {
	var cb = jest.fn();
	div(2, 1, cb);
	expect(cb).toHaveBeenCalledTimes(1);
});

test('div cb should be called with error when div 0', () => {
	var cb = jest.fn((err, data) => {
		expect(err).toBe('b should not be zero');
		expect(data).toBe(null);
	});
	div(2, 0, cb);
});

test('div is working well', () => {
	var cb = jest.fn((err, data) => {
		expect(err).toBe(null);
		expect(data).toBe(2);
	});
	div(2, 1, cb);
});
