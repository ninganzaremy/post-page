const express = require("express"),
	router = express.Router();
const DB = require("../database/connection");

router.get("/", (req, res) => res.render("../assets/views/homepage.pug"));
router.get("/post/create", (req, res) => res.render("../assets/views/post/create.pug"));

//router.get("/post/:id", (req, res) => res.render("../assets/views/post/create.pug"));

router.post("/post/create", (req, res) => {
	const post = req.body;
	DB.query(
		`INSERT INTO posts (title, description, image_url) VALUES('${post.title}', '${post.description}', '${post.image_url}')`,

		(error, result) => {
			if (error) {
				console.log("error:");
				console.log(error);
				return res.redirect("/post/create");
			} else {
				return res.redirect("/");
			}
		},
	);
});

router.get("/post/:id", (req, res) => {
	DB.query(
		`SELECT * FROM posts WHERE id = ${req.params.id} LIMIT 1`,

		(error, result) => {
			if (error) {
				console.log("error:");
				console.log(error);
				return res.redirect("/");
			} else {
				console.log(result[0]);
				return res.render("../assets/views/post/show.pug", result[0]);
			}
		},
	);
});

router.get("/post/:id/edit", (req, res) => {
	DB.query(
		`SELECT * FROM posts WHERE id = ${req.params.id} LIMIT 1`,

		(error, result) => {
			if (error) {
				console.log("error:");
				console.log(error);
				return res.redirect("/");
			} else {
				console.log(result[0]);
				return res.render("../assets/views/post/edit.pug", {
					id: req.params.id,
					title: result[0].title,
					description: result[0].description,
					image_url: result[0].image_url,
				});
			}
		},
	);
});

router.post("/post/:id/edit", (req, res) => {
	const post = req.body;
	DB.query(
		`UPDATE posts SET title = '${post.title}', description = '${post.description}', image_url= ${post.image_url}') `,

		(error, result) => {
			if (error) {
				console.log("error:");
				console.log(error);
				return res.redirect("/post/create");
			} else {
				return res.redirect(`/post/${req.params.id}`);
			}
		},
	);
});
router.get("/post/:id/delete", (req, res) => {
	const post = req.body;
	DB.query(
		` DELETE FROM posts WHERE id = ${req.params.id}`,

		(error, result) => {
			if (error) {
				console.log("error:");
				console.log(error);
				return res.redirect(`/post/${req.params.id}/edit`);
			} else {
				return res.redirect(`/`);
			}
		},
	);
});

//router.get("/about", (req, res) => {
//	res.send("Go to about page");
//});
//router.get("/user/:username/:state/", (req, res) => {
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
