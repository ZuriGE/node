const { writeAndReadTC, writeAndReadAA } = require("./writeAndReadObject.js");
const { readConsoleTC, readConsoleAA } = require("./readConsole.js");

const cbFunctionTC = (consoleObj) => {
	writeAndReadTC("testIndexTC.json", consoleObj);
};

const cbFunctionAA = (consoleObj) => {
	writeAndReadAA("testIndexAA.json", consoleObj);
};

//pruebas
// readConsoleTC(cbFunctionTC);
// readConsoleAA(cbFunctionAA);
// readConsoleTC(cbFunctionAA);
// readConsoleAA(cbFunctionTC);
