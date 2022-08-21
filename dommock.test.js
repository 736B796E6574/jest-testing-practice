/**
 * @jest-environment jsdom
 */
const {
    changeHeading,
    button,
    heading,
} = require('./dommock');

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    heading = require("/dommock".heading)
});



describe("testing the DOM elements", () => {
    test("testing that h1 text is toggled", () => {
        changeHeading();
        expect(document.getElementsByTagName("h1")).length.toBe(1)
    });
});