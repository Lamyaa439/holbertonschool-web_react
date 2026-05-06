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

console.log(printTeacher("John", "Doe"));
