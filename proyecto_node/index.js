const { writeAndRead } = require("./writeAndReadObject.js");
const { readConsole } = require("./readConsole.js");

const cbFunction = (consoleObj) => {
	writeAndRead("testIndex.json", consoleObj);
};

readConsole(cbFunction);
