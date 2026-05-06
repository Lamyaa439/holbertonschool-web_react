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
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  numberOfReports: 17,
};

console.log(director1);
