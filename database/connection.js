const mysql = require("mysql");

const DB = mysql.createConnection({
	host: "us-cdbr-east-05.cleardb.net",
	user: "b55ccbd268b8ec",
	password: "b788926a",
	database: "heroku_be261bca364e5e6",
	multipleStatements: true,
});

DB.connect((error) => {
	if (!error) {
		console.log("Connected to database");
		//Running migratiion of tables
		DB.query("SELECT 1 FROM posts LIMIT 1", (err, results) => {
			if (err) {
				//create table
				console.log("Creating Table posts");
				DB.query(
					`CREATE TABLE posts( id INTEGER unsigned NOT NULL PRIMARY KEY,
				TITLE VARCHAR(60) NOT NULL, DESCRIPTION MEDIUMTEXT NOT NULL, IMAGE_Url MEDIUMTEXT NOT NULL
				)`,
					(error, results) => {
						if (error) {
							console.log("ERROR WHILE CREATING TABLE");
							console.log(error);
						} else {
							console.log("CREATED TABLE");
						}
					},
				);
			} else {
				console.log("Table posts already exists");
			}
		});
	} else {
		console.log("No connection");
	}
});

module.exports = DB;
