/**
 * Interfaces
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Director Class
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

/**
 * Teacher Class
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

/**
 * Factory Function: createEmployee
 * Returns a Teacher if salary is a number < 500.
 * Returns a Director otherwise.
 */
export function createEmployee(salary: number | string): Director | Teacher {
  // Use typeof to check the type of the salary argument
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/**
 * Testing the implementation
 */
console.log(createEmployee(200));    // Should print: Teacher {}
console.log(createEmployee(1000));   // Should print: Director {}
console.log(createEmployee('$500')); // Should print: Director {}
