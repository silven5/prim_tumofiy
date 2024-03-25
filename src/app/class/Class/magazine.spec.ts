import { magazine } from "./magazine";

describe("Magazine testing", () => {
    let mag: magazine;

    beforeEach(() => {
        mag = new magazine("Журнал: Fashion Forward", "5.99", "50000");
    });

    it("Should create class magazine", () => {
        expect(mag).toBeTruthy();
    });

    it("Сirculation calculation of magazine(value: 5.99, circulation: 50000)", () => {
        const result = mag.circulationValue()
        
        expect(result).toEqual("299500")
    });

    it("Constructor test if undefined", () => {
        expect(() => new magazine('', '', '')).toThrow(new Error('undefined values'));
    });

    it("Constructor test if defined", () => {
        expect(() => new magazine("Журнал: Fashion Forward", "5.99", "50000")).not.toThrow(new Error('undefined values'));
    });

    it("Get Title test", () => {
        const result = 'Журнал: Fashion Forward';

        expect(mag.getTitle()).toEqual(result);
    });

    it("Get Value test", () => {
        const result = '5.99';

        expect(mag.getValue()).toEqual(result);
    });

    it("Get Circulation test", () => {
        const result = '50000';

        expect(mag.getCirculation()).toEqual(result);
    });
    
});