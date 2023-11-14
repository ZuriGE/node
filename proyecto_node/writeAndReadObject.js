const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const writeAndRead = (path, obj) => {
	fs.writeFile(path, JSON.stringify(obj), (err) => {
		if (err) {
			console.error("Error writeFile", err);
			rl.close();
			return;
		}

		setTimeout(() => {
			fs.readFile(path, "utf8", (err, data) => {
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

// //test
// const testPath = "prueba.json";
// const testObj = { name: "Zuri", surname: "Galán", age: 33 };

// writeAndRead(testPath, testObj);

module.exports = { writeAndRead };
