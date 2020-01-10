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

const error = namespace => {
  const d = debug(namespace);
  d.log = text => fs.appendFileSync(path, `${generateErrorDiv(text)}\n`);
  return d;
};

const info = namespace => {
  const d = debug(namespace);
  d.log = text => fs.appendFileSync(path, `${generateInfoDiv(text)}\n`);
  return d;
};

const logTitle = text => fs.appendFileSync(path, `${generateSuiteTitleDiv(text)}\n`);
const logTest = text => fs.appendFileSync(path, `${generateTestTitleDiv(text)}\n`);

module.exports = {error, info, logTitle, logTest};