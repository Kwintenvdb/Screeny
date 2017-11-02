const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/api/screenshots", (req, res) => {
	res.json({
		test: "hello"
	});
});

app.listen(3000);
