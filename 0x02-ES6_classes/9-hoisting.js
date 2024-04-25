// Define a class representing a Holberton school class with a year and location.
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  // Retrieve year of Holberton class.
  get year() {
    return this._year;
  }

  // Retrieve location of Holberton class.
  get location() {
    return this._location;
  }
}

// Define a class representing a student at Holberton school.
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  // Retrieve full name of student.
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Retrieve Holberton class instance associated with student.
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Retrieve a description of student includingir name, class year, and location.
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Create instances of HolbertonClass for years 2019 and 2020 in San Francisco.
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Create instances of StudentHolberton for various students in 2019 and 2020 classes.
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Compile a list of student instances.
const listOfStudents = [student1, student2, student3, student4, student5];

// Export list of students as default export of this module.
export default listOfStudents;
