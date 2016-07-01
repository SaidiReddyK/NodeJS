
exports.render = function(req, resp) {

	if(req.session.lastVisit) {
		console.log("Session ID: %s, last visited on: %s", 
						req.sessionID, req.session.lastVisit);
	}
	req.session.lastVisit = new Date();

	//resp.send('<h2>Hello, from ExpressJs Server....</h2>');
	resp.render('index', { title : 'Welcome to Verizon MEAN Portal....' });
};