const elements = {
    DIV: "div",
    P: "p"
};

const arraySelector = regex => [...document.querySelectorAll(regex)];

const arrayByClassName = className => [
    ...document.getElementsByClassName(className)
];

const toggleDisplay = el => el.style.display = el.style.display === 'block'
    ? 'none' : 'block';

const turnOffDisplay = el => el.style.display === 'block'
    ? el.style.display = 'none' : null;

const togglePlus = el => el.innerHTML = el.innerHTML === "<b>+</b>" ? "<b>-</b>"
    : "<b>+</b>";

const closePlus = el => el.innerHTML === "<b>-</b>"
    ? el.innerHTML = "<b>+</b>" : null;

const classStartsWith = (el, cls) => `${el}[class^="${cls}"]`;

const toggleSuite = index => {
    arraySelector(classStartsWith(elements.DIV, `test-title ${index}`))
        .forEach(toggleDisplay);

    arraySelector(classStartsWith(elements.DIV, `log ${index}-`))
        .forEach(turnOffDisplay);

    arrayByClassName(`plus ${index}`)
        .forEach(togglePlus);

    arraySelector(classStartsWith(elements.P, `plus ${index}-`))
        .forEach(closePlus);
};

const toggleTest = (suiteIndex, testIndex) => {
    arrayByClassName(`log ${suiteIndex}-${testIndex}`)
        .forEach(toggleDisplay);

    arrayByClassName(`plus ${suiteIndex}-${testIndex}`)
        .forEach(togglePlus);
};

const renderJsons = () => {
    arraySelector(classStartsWith(elements.DIV, 'log')).forEach(el => {
        let paragraph = [...el.children][0];
        let innerPHtml = paragraph.innerHTML;
        let index = innerPHtml.indexOf("&lt;&lt;");
        if (index !== -1) {
            const json = innerPHtml.substring(
                index + 8, innerPHtml.indexOf("&gt;&gt;"));
            paragraph.innerHTML = innerPHtml.replace(
                "&lt;&lt;" + json + "&gt;&gt;", "");
            let jsonElement = renderjson.set_icons('+', '-')(
                JSON.parse(json));
            jsonElement.classList.add([...paragraph.classList][0]);
            el.appendChild(jsonElement);
        }
    });
};

const markTestTitleColors = () => {
    arraySelector(classStartsWith(elements.DIV, 'test-title ')).forEach(el => {
        el.classList.add(
            arraySelector(
                classStartsWith(elements.DIV, `log ${[...el.classList][1]}`))
                .find(el => el.children[0].className.includes("error"))
                ? "error" : "pass"
        )
    });
};

const markSuiteTitleColors = () => {
    arraySelector(classStartsWith(elements.DIV, "suite-title ")).forEach(el => {
        el.classList.add(
            arraySelector(
                classStartsWith(
                    elements.DIV, `test-title ${[...el.classList][1]}-`))
                .find(el => [...el.classList].includes("error"))
                ? "error" : "pass"
        )
    });
};