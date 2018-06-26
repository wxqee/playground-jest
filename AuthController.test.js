var AuthController = require('./AuthController');

//test('Login should success', function() {
//	var req = {
//		body: { username: 'admin', password: 'admin888' }
//	};
//	var res = {
//		redirect: function(loc) {
//			expect(loc).toBe('/');
//		}
//	};
//	AuthController.login(req, res);
//});

test('redirect should be called when login success', function() {
	var req = {
		body: { username: 'admin', password: 'admin888' }
	};
	var res = {
		redirect: jest.fn(function(loc) {
			expect(loc).toBe('/');
		})
	};
	AuthController.login(req, res);
	expect(res.redirect).toHaveBeenCalledTimes(1);
});
