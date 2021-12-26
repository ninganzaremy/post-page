const express = require("express"),
	router = express.Router();

router.get("/", (req, res) => {
	res.send("Welcome to my Blog!");
});
router.get("/about", (req, res) => {
	res.send("Go to about page");
});
router.get("/user/:username/:state/", (req, res) => {
	console.log(req.params);

	const user = req.params;
	const query = req.query;
	const car = req.query;

	res.send(` 
	
	<h1> The user is: ${user.username} </h1>
	<h1>Home State: ${user.state}</h1>
	<h1> Low is: ${query.low} </h1>
	<h1>High is: ${query.high} </h1>
	<h1>Car is: ${query.car} </h1>

	`);
});

module.exports = router;
