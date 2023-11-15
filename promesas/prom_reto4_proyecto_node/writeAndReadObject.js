const fs = require("fs/promises");
const readline = require("readline");

// con then/catch
const writeAndReadTC = (path, obj) => {
	fs.writeFile(path, JSON.stringify(obj))
		.then(() => {
			return fs.readFile(path, "utf-8");
		})
		.then((newObj) => {
			console.log(JSON.parse(newObj));
		})
		.catch((err) => {
			console.log(err);
		});
};

//con async await
const writeAndReadAA = async (path, obj) => {
	await fs.writeFile(path, JSON.stringify(obj));
	const newObj = await fs.readFile(path, "utf-8");
	console.log(JSON.parse(newObj));
};

//PRUEBAS
const myPath = "test.json";
const myObj = { name: "Zuriñe", surname: "Galán", age: 33 };

// writeAndReadTC(myPath, myObj);
// writeAndReadAA(myPath, myObj);

module.exports = { writeAndReadTC, writeAndReadAA };
