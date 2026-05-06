// Define the Teacher interface
interface Teacher {
  // readonly ensures these can only be set during initialization
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  
  // optional property denoted by '?'
  yearsOfExperience?: number;

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
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // This is allowed by the index signature [propName: string]: any
};

console.log(director1);

