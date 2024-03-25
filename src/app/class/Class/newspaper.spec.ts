import { newspaper } from "./newspaper";

describe("Newspaper testing", () => {
    let newsp: newspaper;

    beforeEach(() => {
        newsp = new newspaper("Газета: Business Chronicle", "24", "0.15", "150000");
    });

    it("Should create class newspaper", () => {
        expect(newsp).toBeTruthy();
    });

    it("Сirculation calculation of newspaper(amount of page: 24, value of page: 0.15, circulation: 150000)", () => {
        const result = newsp.circulationValue()
        
        expect(result).toEqual("540000")
    });

    it("Constructor test if undefined all values", () => {
        expect(() => new newspaper('', '', '', '')).toThrow(new Error('undefined values'));
    });

    it("Constructor test if defined", () => {
        expect(() => new newspaper("Газета: Business Chronicle", "24", "0.15", "150000")).not.toThrow(new Error('undefined values'));
    });

    it("Get Title test", () => {
        const result = 'Газета: Business Chronicle';

        expect(newsp.getTitle()).toEqual(result);
    });

    it("Get AmountOfPages test", () => {
        const result = '24';

        expect(newsp.getAmountOfPages()).toEqual(result);
    });

    it("Get ValueOfPage test", () => {
        const result = '0.15';

        expect(newsp.getValueOfPage()).toEqual(result);
    });

    it("Get Circulation test", () => {
        const result = '150000';

        expect(newsp.getCirculation()).toEqual(result);
    });
});