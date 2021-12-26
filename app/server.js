const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Welcome to my Blog!");
});
app.get("/about", (req, res) => {
	res.send("Go to about page");
});

app.listen(port, () => {
	console.log(`postpage app listening at http://localhost:${port}`);
});
