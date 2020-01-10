let testSuiteIndex = 0;
let testIndex = 0;

const generateErrorDiv = text => {
    return (
        `<div class='log ${testSuiteIndex}-${testIndex}' style='display: none'>
        <p class='error'>${text}</p>
      </div>`
    )
};

const generateInfoDiv = text => {
    return (
        `<div class='log ${testSuiteIndex}-${testIndex}' style='display: none'>
        <p class='info'>${text}</p>
      </div>`
    );
};

const generateSuiteTitleDiv = text => {
    testSuiteIndex++;
    testIndex = 0;
    return (
        `<div class='suite-title ${testSuiteIndex}'>
            <p class='plus ${testSuiteIndex}' onclick='toggleSuite(${testSuiteIndex})'><b>+</b></p>
            <h1 class='title'>${text}</h1>
      </div>`
    )
};

const generateTestTitleDiv = text => {
    testIndex++;
    return (
        `<div class='test-title ${testSuiteIndex}-${testIndex}' style='display: none'>
            <p class='plus ${testSuiteIndex}-${testIndex}' onclick='toggleTest(${testSuiteIndex},${testIndex})'><b>+</b></p>
            <h2 class='test ${testSuiteIndex}-${testIndex}'>${text}</h2>
      </div>`
    );
};

const generateHTML = data => {
    return (
        `
<html lang='en'>
    <head>
        <title>E2E Automation Log</title>
        <script type="text/javascript" src='../debugger/js/index.js'></script>
        <script type="text/javascript" src="../debugger/js/renderjson.js"></script>
        <link rel="stylesheet" type="text/css" href="../debugger/styles/test.css">      
    </head>
    <body>
    <h1 class='head-title'>E2E Automation Log</h1>
    ${data}
    </body>
    <script>
       renderJsons();
       markTestTitleColors();
       markSuiteTitleColors();
    </script>
</html>`
    )
};

module.exports = {
    generateHTML,
    generateErrorDiv,
    generateInfoDiv,
    generateSuiteTitleDiv,
    generateTestTitleDiv
};