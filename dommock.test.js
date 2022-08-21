/**
 * @jest-environment jsdom
 */

const {
    changeHeading,
    button,
    heading,
    listener
} = require('./dommock');

beforeEach(() => {
    document.body.InnerHTML = '<h1 id="heading class="before-click">BEFORE CLICK</h1>'
});

describe("testing the DOM elements", () => {
    test("testing that h1 text is toggled", () => {
        changeHeading()
        expect(document.getElementById("heading").innerText.toEqual("AFTER CLICK"))
    });
});