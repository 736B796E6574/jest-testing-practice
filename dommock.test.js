/**
 * @jest-environment jsdom
 */

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

const {
    changeHeading,
    button,
    heading,
} = require('./dommock');


describe("testing the DOM elements", () => {
    test("testing that h1 text is toggled", () => {
        changeHeading();
        expect(heading.innerText).toBe('AFTER CLICK')
    });
});