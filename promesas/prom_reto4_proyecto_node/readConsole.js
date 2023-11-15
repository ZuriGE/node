const fs = require("fs/promises");
const readline = require("readline");

function pregunta(pregunta) {
	const question = new Promise((resolve, reject) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		rl.question(pregunta, (respuesta) => {
			resolve(respuesta);
			rl.close();
		});
	});
	return question;
}

//con then/catch
const readConsoleTC = (callback) => {
	consoleObjTC = {};

	pregunta("Nombre: ")
		.then((dato) => {
			consoleObjTC.name = dato;
			return pregunta("Apellido: ");
		})
		.then((dato) => {
			consoleObjTC.surname = dato;
			return pregunta("Age: ");
		})
		.then((dato) => {
			consoleObjTC.age = dato;
			return consoleObjTC;
		})
		.then((obj) => {
			return fs.writeFile("reto3ThenCatch.json", JSON.stringify(obj));
		})
		.then((obj) => {
			return fs.readFile("reto3ThenCatch.json", "utf-8");
		})
		.then((obj) => {
			callback(JSON.parse(obj));
		})
		.catch((error) => {
			console.log(error);
		});
};

//con Async await
const readConsoleAA = async (callback) => {
	consoleObjAA = {};

	consoleObjAA.name = await pregunta("Nombre: ");
	consoleObjAA.surname = await pregunta("Apellido: ");
	consoleObjAA.age = await pregunta("Edad: ");

	await callback(consoleObjAA);
};

//PRUEBAS

// readConsoleTC(console.log);
// readConsoleAA(console.log);

module.exports = { readConsoleTC, readConsoleAA };
