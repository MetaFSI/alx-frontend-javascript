// firstName(string), lastName(string), age(number), and location(string).
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const studentOne: Student = {
    firstName: 'Olumide',
    lastName: 'Micheal',
    age: 23,
    location: 'Lagos',
}

const studentTwo: Student = {
    firstName: 'Tolulope',
    lastName: 'Micheal',
    age: 25,
    location: 'Canada',
}

// creating array named studentsList containing the two variables.
const studentsList: Student[] = [studentOne, studentTwo];

// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table.
let table = document.createElement('table');
let tableBody = document.createElement('tbody');
table.style.width = '100%';
table.style.background = '#34ebeb'

studentsList.forEach(student => {
    let row = document.createElement('tr');
    let nameCol = document.createElement('td');
    let locationCol = document.createElement('td');
    
    // Each row should contain first name of student and location.
    nameCol.textContent = student.firstName;
    locationCol.textContent = student.location;
    nameCol.style.textAlign = 'center';
    locationCol.style.textAlign = 'center';
    nameCol.style.color = '#000';
    locationCol.style.color = '#000';
    nameCol.style.border = '1px dotted black';
    locationCol.style.border = '1px dotted black';
    nameCol.style.height = '300px';
    locationCol.style.height = '300px';
    
    row.appendChild(nameCol); // append cell to the row
    row.appendChild(locationCol); // append cell to the row
    tableBody.appendChild(row); // append row to the tbody
});
table.appendChild(tableBody); // append tbody to the table
document.body.appendChild(table); // append table to the body
