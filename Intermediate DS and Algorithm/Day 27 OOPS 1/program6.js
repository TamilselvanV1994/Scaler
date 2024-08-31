class University {
  constructor(name, departments = "") {
    this.name = name;
    this.departments = [];
  }
  addDepartment(department) {
    this.departments.push(department);
    console.log(`${department} Added`);
  }

  removeDepartment(department) {
    this.departments = this.departments.filter((val) => val != department);
    console.log(`${department} Removed`);
  }

  displayDepartements() {
    this.departments.map((department, index) =>
      console.log(`${index + 1}. ${department}`)
    );
  }
}

const university = new University("Hardvard");

university.addDepartment("Computer Science");
university.addDepartment("Robatics");
university.addDepartment("Artificial Inteligence(AI)");
university.addDepartment("Data Scientices");
university.addDepartment("Space Scientices");
university.removeDepartment("Computer Science");
university.displayDepartements();
console.log(university);
