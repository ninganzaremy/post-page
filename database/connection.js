const mysql = require("mysql");

const DB = mysql.createConnection({
	host: "us-cdbr-east-05.cleardb.net",
	user: "b55ccbd268b8ec",
	password: "b788926a",
	database: "heroku_be261bca364e5e6",
	multipleStatements: true,
});

DB.connect((error) => (!error ? console.log("Connected to database") : console.log("No connection")));

module.exports = DB;
