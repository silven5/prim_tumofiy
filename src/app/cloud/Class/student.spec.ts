import { Student } from "./student";

describe("Student testing", () => {
    let std: Student;

    beforeEach(() => {
        std = new Student("Full Name", "DoB", "Address", "Phone");
    });

    it("Should create class Student", () => {
        expect(std).toBeTruthy();
    });

    it("Constructor test if undefined all values", () => {
        expect(() => new Student('', '', '', '')).toThrow(new Error('undefined values'));
    });

    it("Constructor test if defined", () => {
        expect(() => new Student("Full Name", "DoB", "Address", "Phone")).not.toThrow(new Error('undefined values'));
    });
});