/**
 * Get Home Page
 */
exports.homeView = (req, res) => {
  res.render('pages/index', {
    title: 'Finance Bot', 
    error: 'no'
  });
};

/**
 * Get About Page
 */
exports.aboutView = (req, res) => {
  res.render('pages/about', {
    title: 'About Us'
  });
};

/**
 * POST /
 * Post Search Term.
 */
exports.getTempToken = (req, res, next) => {
	
	
	client_id = req.body.id2;
	client_secret = req.body.password;

	// console.log("client_id : " + client_id);
	// console.log("client_secret : " + client_secret);
	
	var Client = require('node-rest-client').Client;
	var client = new Client();

	var auth_token = "init";
	var access_token = "init";

	var args1 = {
		data: {			
			test: "hello"
		},
		headers: {"Content-Type": "application/x-www-form-urlencoded"}
	};

	client.post("https://tchokin.biapi.pro/2.0/auth/init", args1, function (data, response) {		
		auth_token = data.auth_token;
		console.log("auth_token: " + auth_token);

		var args2 = {
			data: {
				client_id: client_id,
				client_secret: client_secret,
				code: auth_token
			},
			headers: {"Content-Type": "application/x-www-form-urlencoded"}
		};

		client.post("https://tchokin.biapi.pro/2.0/auth/token/access", args2, function (data, response) {
			if(data.error != undefined) {
				console.log("Invalid Client! Please recheck your credential!");
				return res.render('pages/index', {
				   title: 'Finance Bot', 
				   error: data.error
				});
			}
			console.log("access_token: " + data.access_token);
			res.render('pages/processToken', {
				title: 'Access Token',
				access_token: data.access_token
			});
		});

	});
};
