const debug = require("debug");
const fs = require("fs");
const {generateErrorDiv, generateInfoDiv, generateSuiteTitleDiv, generateTestTitleDiv} = require("./js/HTMLGenerator.js");

const path = "target/automation.html";

if (!fs.existsSync("target")) {
  fs.mkdirSync("target");
}

fs.createWriteStream(path);

debug.formatters.j = json => `<<${JSON.stringify(json)}>>`;

debug.formatArgs = function (args) {
  args[0] = this.namespace + ": " + args[0];
};

const append = data => fs.appendFileSync(path, data + "\n");

const createLogFunction = (namespace, generatorFunction) => {
  const d = debug(namespace);
  d.log = text => append(generatorFunction(text));
  return d;
};

module.exports = {
  error: namespace => createLogFunction(namespace, generateErrorDiv),
  info: namespace => createLogFunction(namespace, generateInfoDiv),
  logTitle: text => append(generateSuiteTitleDiv(text)),
  logTest: text => append(generateTestTitleDiv(text))
};