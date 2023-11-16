const express = require("express");
const app = express();

app.use((req, res, next) => {
	console.log("Petición recibida del cliente");
	console.log(req.url);
	console.log(req.method);
	console.log(req.headers["user-agent"]);

	res.setHeader("Content-Type", "application/json");

	let msg;
	req.url == "/bye" ? (msg = "Adios!") : (msg = "Recibido!");

	res.status(200).send(JSON.stringify({ ok: true, message: msg }));

	// next();
});

// app.all("/bye", (req, res, next) => {
// 	res.setHeader("Content-Type", "application/json");
// 	res.status(200).send(JSON.stringify({ ok: true, message: "Adios!" }));

// 	// next();
// });

app.listen(3000);
