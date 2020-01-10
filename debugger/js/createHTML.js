(() => {
    const fs = require("fs");
    const { generateHTML } = require("./HTMLGenerator.js");
    const path = "target/automation.html";
    fs.writeFileSync(path, `${generateHTML(fs.readFileSync(path).toString())}`);
})();