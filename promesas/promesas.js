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

const myObj = { name: "Zuriñe", surnema: "Galán", age: 33 };

//RETO 2
//Crea un objeto con las siguientes propiedades: name, surname, age.
//• Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el objeto e imprimelo por consola.
//• Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de ejecutar el archivo de nuevo.

//con async/await
const reto2AsyncAwait = async () => {
	await fs.writeFile("reto2AsyncAwait.json", JSON.stringify(myObj));
	const newObj = await fs.readFile("reto2AsyncAwait.json", "utf-8");
	console.log(JSON.parse(newObj));
};

// con then/catch
const reto2ThenCatch = () => {
	fs.writeFile("reto2ThenCatch.json", JSON.stringify(myObj))
		.then(() => {
			return fs.readFile("reto2ThenCatch.json", "utf-8");
		})
		.then((newObj) => {
			console.log(JSON.parse(newObj));
		})
		.catch((err) => {
			console.log(err);
		});
};

//RETO 3
//Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el módulo readline de node y solicita los valores del name, surname y age a través de la consola.
// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método readline.
// • Este ejercicio debe hacerse en una única ejecución de JavaScript

// Con Then/Catch;

const reto3ThenCatch = () => {
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
			console.log(JSON.parse(obj));
		})
		.catch((error) => {
			console.log(error);
		});
};

//con async/await
const reto3AsyncAwait = async () => {
	consoleObjAA = {};

	consoleObjAA.name = await pregunta("Nombre: ");
	consoleObjAA.surname = await pregunta("Apellido: ");
	consoleObjAA.age = await pregunta("Edad: ");

	await fs.writeFile("reto3AsyncAwait.json", JSON.stringify(consoleObjAA));
	const newObj = await fs.readFile("reto3AsyncAwait.json", "utf-8");

	console.log(JSON.parse(newObj));
};

//PRUEBAS

// reto2AsyncAwait();
reto2ThenCatch();
// reto3AsyncAwait();
// reto3ThenCatch();
