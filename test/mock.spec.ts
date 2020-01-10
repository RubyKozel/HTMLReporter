const {info, error, logTest, logTitle} = require("../debugger/debugger.ts");

const logInfo = info("test");
const logError = error("test");

describe("mock test", function () {
  before(() => {
    logTitle("mock test");
  });

  beforeEach(function () {
    logTest(this.currentTest.title);
  });

  afterEach(function () {
    logInfo(this.currentTest.title + " - END");
  });

  it("should do nothing but log", () => {
    logError("test error");
    logInfo("test info %j", {info: "someInfo"});
    logInfo("%j", {test: "hello", another: {test: "test"}});
  });

  it("should do nothing but log2", () => {
    logInfo("test info %j", {info: "someInfo"});
    logInfo("%j", {test: "hello", another: {test: "test"}});
  });

  it("should do nothing but log3", () => {
    logError("test error");
    logInfo("test info %j", {info: "someInfo"});
    logInfo("%j", {test: "hello", another: {test: "test"}});
  });
});

describe("mock test2", function () {
  before(() => {
    logTitle("mock test2");
  });

  beforeEach(function () {
    logTest(this.currentTest.title);
  });

  afterEach(function () {
    logInfo(this.currentTest.title + " - END");
  });

  it("2 - should do nothing but log", () => {
    logInfo("test info %j", {info: "someInfo"});
    logInfo("%j", {test: "hello", another: {test: "test"}});
  });

  it("2 - should do nothing but log2", () => {
    logInfo("test info %j", {info: "someInfo"});
    logInfo("%j", {test: "hello", another: {test: "test"}});
  });

  it("2 - should do nothing but log3", () => {
    logInfo("test info %j", {info: "someInfo"});
    logInfo("%j", {test: "hello", another: {test: "test"}});
  });
});