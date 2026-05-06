// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create student variables
const student1: Student = {
  firstName: "Lamyaa",
  lastName: "Alghaihab",
  age: 26,
  location: "Riyadh"
};

const student2: Student = {
  firstName: "Ahmad",
  lastName: "Saleh",
  age: 25,
  location: "Jeddah"
};

// 3. Store students in an array
const studentsList: Array<Student> = [student1, student2];

/** 
 * 4. Render Table using Vanilla Javascript
 */
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

// Style the table slightly for visibility (optional)
table.style.width = '100%';
table.style.border = '1px solid black';

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const nameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Add some padding to cells
  nameCell.style.border = '1px solid gray';
  locationCell.style.border = '1px solid gray';

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
