/**
 * @jest-environment jsdom
 */
 let heading;
 let changeHeading;

beforeAll(() => {

    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    heading = require("./dommock").heading;
    changeHeading = require("./dommock").changeHeading;
});



describe("testing the DOM elements", () => {
    test("check that there are 2 H1 elements", () => {
        expect(document.getElementsByTagName("h1").length).toBe(2)
    });
    test("check that the inner text of H1 is 'BEFORE CLICK'", () => {
        expect(heading.textContent).toBe("BEFORE CLICK")
    });
});