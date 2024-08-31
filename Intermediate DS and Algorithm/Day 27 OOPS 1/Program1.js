class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  anualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  anualSalary() {
    const baseSalary = super.anualSalary();
    const bonus = 0.1;
    console.log(
      `Annual Salay is $${baseSalary} and bonus $${baseSalary * bonus} total $${
        baseSalary + baseSalary * bonus
      }`
    );
  }
}

const employee1 = new Manager("Tamilselvan", 100000, "NOC");
const employee2 = new Manager("Pavithara", 120000, "TECH");

console.log(employee1);
console.log(employee2);

employee1.anualSalary();
