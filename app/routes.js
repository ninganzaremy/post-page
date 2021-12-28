const express = require("express"),
	router = express.Router();

router.get("/", (req, res) => res.render("../assets/views/homepage.pug"));
//router.get("/about", (req, res) => {
//	res.send("Go to about page");
//});
////router.get("/user/:username/:state/", (req, res) => {
//	console.log(req.params);

//	const user = req.params;
//	const query = req.query;
//	const car = req.query;

//	res.send(`

//	<h1> The user is: ${user.username} </h1>
//	<h1>Home State: ${user.state}</h1>
//	<h1> Low is: ${query.low} </h1>
//	<h1>High is: ${query.high} </h1>
//	<h1>Car is: ${query.car} </h1>

//	`);
//});
router.get("/pug", (req, res) => {
	return res.render("../assets/views/testing.pug", {
		username: "Remix",
		fname: "coder",
		lname: "javascript",
		loggedIn: true,
		friends: ["Jane", "Johny", "Jill", "Julia"],
	});
});

module.exports = router;
