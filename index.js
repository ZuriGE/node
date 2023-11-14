const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

// //reto 1
// console.log("Mensaje1");
// setTimeout(() => {
// 	console.log("Mensaje2");
// 	console.log("Mensaje3");
// }, 3000);

////reto 2

const objReto2 = { name: "Zuri", surname: "Galán", age: 33 };

const reto2 = (obj) => {
	fs.writeFile(`./${obj}.json`, JSON.stringify(obj), (err) => {
		if (err) {
			console.error("Error writeFile", err);
			rl.close();
			return;
		}

		setTimeout(() => {
			fs.readFile(`${obj}.json`, "utf8", (err, data) => {
				if (err) {
					console.error("Error readFile", err);
					rl.close();
					return;
				}
				console.log(JSON.parse(data));
				rl.close();
			});
		}, 10);
	});
};

////reto 3

const reto3 = () => {
	let objReto3 = {};
	rl.question("Nombre: ", (name) => {
		objReto3.name = name;

		rl.question("Apellido: ", (surname) => {
			objReto3.surname = surname;

			rl.question("Edad: ", (age) => {
				objReto3.age = parseInt(age);

				rl.close();

				setTimeout(() => {
					reto2(objReto3);
				}, 100);
			});
		});
	});
};

// //pruebas reto 2
// reto2(objReto2);

// //pruebas reto 3
// reto3();
