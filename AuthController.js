var AuthController = {
	login: function(req, res) {
		var username = req.body.username;
		var password = req.body.password;

		if (username === 'admin' && password === 'admin888') {
			return res.redirect('/');
		}

		res.sendStatus(402);
	}
};

module.exports = AuthController;
