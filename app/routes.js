//require express 
var express =  require ('express');
var path = require('path');

//create our route object
var router = express.Router();

//export our router
module.exports = router;

//route for our homepage
router.get('/', function(req, res){
	//res.sendFile(path.join(__dirname, '../index.html'));
	res.render('pages/index');
});

//route for our about page
router.get ('/about' , function (req, res) {
	res.render('pages/about');
});

//calling Budget API
router.post('/getTempCode', function(req, res) {
	res.render('pages/index');
//	console.log(req.body);
});
