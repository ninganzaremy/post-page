const express = require("express");
const app = express();
const port = 3000;

const routes = require("./routes.js");

//Routes
app.use("/", routes);

//static files folder
app.use(express.static("public"));

//Template Engines
app.set("view engine", "pug");

//listening on port 3000
app.listen(port, () => {
	console.log(`postpage app listening at http://localhost:${port}`);
});
