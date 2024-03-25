import { StudentList } from "./studentsList";

describe('StudentList', () => {
  let studentList: StudentList;

  beforeEach(() => {
    studentList = new StudentList();
  });

  it('should create an instance', () => {
    expect(studentList).toBeTruthy();
  });

  it('should add student to the list', () => {
    studentList.addStudent('John Doe', '2000-01-01', '123 Main St', '123-456-7890');
    expect(studentList._Student.length).toBe(1);
  });

  it('should throw error if any parameter is undefined', () => {
    expect(() => {
      studentList.addStudent('', '', '', '');
    }).toThrowError('undefined values');
  });

  it('should throw error if any parameter is defined', () => {
    expect(() => {
      studentList.addStudent('John Doe', '2000-01-01', '123 Main St', '123-456-7890');
    }).not.toThrowError('undefined values');
  });
  
});