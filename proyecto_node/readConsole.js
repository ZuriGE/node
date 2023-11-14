const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const readConsole = (callback) => {
	let consoleObj = {};

	rl.question("Nombre: ", (name) => {
		consoleObj.name = name;

		rl.question("Apellido: ", (surname) => {
			consoleObj.surname = surname;

			rl.question("Edad: ", (age) => {
				consoleObj.age = parseInt(age);

				rl.close();

				callback(consoleObj);
				return consoleObj;
			});
		});
	});
};

// readConsole(console.log);

module.exports = { readConsole };
