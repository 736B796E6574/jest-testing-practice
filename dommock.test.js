/**
 * @jest-environment jsdom
 */
const {
    changeHeading,
} = require('./dommock');

beforeAll(() => {

    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    heading = require("./dommock").heading
});



describe("testing the DOM elements", () => {
    test("check that there are 2 H1 elements", () => {
        expect(document.getElementsByTagName("h1").length).toBe(2)
    });
    test("check that the inner text of H1 is 'BEFORE CLICK'", () => {
        expect(heading.innerText).toBe("BEFORE CLICK")
    });
});