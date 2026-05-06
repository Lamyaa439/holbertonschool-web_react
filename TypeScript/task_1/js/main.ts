// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  // Index signature to allow adding any other attributes
  [propName: string]: any;
}

// New Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage as per requirements
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  numberOfReports: 17,
};

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// The function implementation
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

/**
 * Interface describing the Class (The Instance side)
 * This defines the methods that will be available on the created object.
 */
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Interface describing the Constructor (The Static side)
 * In TypeScript, we use 'new' to describe a contract for a class constructor.
 */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/**
 * The Class Implementation
 * use 'implements' to ensure the class follows the StudentClassInterface.
 */
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method returns a fixed string as per requirements
  workOnHomework(): string {
    return "Currently working";
  }

  // Method returns the student's first name
  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Lamyaa", "Alghaihab");
console.log(student.displayName());      // Should print: Lamyaa
console.log(student.workOnHomework());  // Should print: Currently working
