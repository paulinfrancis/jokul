import { isValidFodselsnummer } from "./isValidFodselsnummer";

describe("isValidFodselsnummer", () => {
    // testdata ssn
    it("should return true valid ssn", () => {
        expect(isValidFodselsnummer("15129449648")).toBe(true);
    });

    // testdata ssn
    it("should return true valid ssn", () => {
        expect(isValidFodselsnummer("02029000436")).toBe(true);
    });

    // testdata ssn
    it("should return true valid ssn", () => {
        expect(isValidFodselsnummer("01105743900")).toBe(true);
    });

    it("should return false if not valid ssn", () => {
        expect(isValidFodselsnummer("34123449648")).toBe(false);
    });
});
