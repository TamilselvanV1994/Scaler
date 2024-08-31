// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   Name() {
//     console.log(`my name is ${this.name}`);
//   }

//   age() {
//     console.log(`my age is ${this.age}`);
//   }
// }

// const Tamil = new Person("Tamil", 30);

// class Qualification extends Person {
//   constructor(name, age, ten, twel, deg) {
//     super(name, age);
//     this.ten = ten;
//     this.twel = twel;
//     this.deg = deg;
//   }
// }

// const person = new Qualification("tamil", 30, 80, 85, 90);

// console.log(person.name);
// person.Name();

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   MyName() {
//     return `my name is ${this.name}`;
//   }
// }

// const student1 = new Student();
// student1.name = "dev";

// console.log(student1);
// let myName = student1.MyName();
// console.log(myName);

// simple bank account class

// class BankAccount {
//   constructor(accountNumber, accountName, balance = 0) {
//     this.accountName = accountName;
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }

//   deposite(amount) {
//     if (amount > 0) {
//       this.balance = amount + this.balance;
//       console.log(`Deposited Amount $${amount}`);
//     } else {
//       console.log(`Deposite Amount should be in positive`);
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.balance) {
//       this.balance = this.balance - amount;
//       console.log(`withdrawal Amount $${amount}`);
//     } else {
//       console.log(
//         `Insufficient Fund or Invalid Amount, Your Current Balance is $${this.balance}`
//       );
//     }
//   }

//   checkBalance() {
//     console.log(`Balance $${this.balance}`);
//   }
// }

// const myAccount = new BankAccount(12345, "Tamilselvan");
// myAccount.deposite(100);
// myAccount.withdraw(50);
// myAccount.checkBalance();

// myAccount.deposite(0);
// myAccount.withdraw(1000);

// console.log(myAccount);

// const PaviAccount = new BankAccount(10001, "Pavithara", 0);

// PaviAccount.deposite(1000);
// PaviAccount.checkBalance();
// PaviAccount.withdraw(500);
// console.log(PaviAccount);

console.log(`// Student Grade Tracker`);

class Student {
  constructor(name) {
    this.name = name;
    this.grade = [];
  }

  addGrade(mark) {
    if (mark >= 0 && mark <= 100) {
      this.grade.push(mark);
    } else {
      console.log(`Grade should between 0 to 100`);
    }
  }

  gradeAvg() {
    return (
      this.grade.reduce((sum, grade) => sum + grade, 0) / this.grade.length
    );
  }

  printGrade() {
    let average = this.gradeAvg();
    console.log(`Student: ${this.name}, Avg Grade: ${average}`);
  }

  maxGrade() {
    let maxGrade = Math.max(...this.grade);
    console.log(`Highest Grade: ${maxGrade} `);
  }
}

const studentPavi = new Student("pavi");
studentPavi.addGrade(50);
studentPavi.addGrade(50);
studentPavi.addGrade(50);
studentPavi.addGrade(100);
studentPavi.addGrade(50);
studentPavi.printGrade();
console.log(studentPavi);
studentPavi.maxGrade();

// Library System

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     this.isAvailable = true;
//   }

//   borrowBook() {
//     if (this.isAvailable) {
//       this.isAvailable = false;
//       console.log(`You have borrowed "${this.title}" by "${this.author}"`);
//     } else {
//       console.log(`sorry, "${this.title}" is currently unabailable`);
//     }
//   }

//   returnBook() {
//     this.isAvailable = true;
//     console.log(`You have returned "${this.title}"`);
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//     this.barrowedBooks = [];
//   }

//   addBook(book) {
//     this.books.push(book);
//     console.log(`Added "${book.title}" to the library`);
//   }

//   barrowedBook(book, userid) {
//     this.barrowedBooks.push({ Book: book, UserId: userid });
//   }

//   listAvailableBooks() {
//     console.log("Avaialble Books");
//     this.books.map((book) => {
//       if (book.isAvailable) {
//         console.log(` - "${book.title}" by "${book.author}"`);
//       }
//     });
//   }
// }

// const book1 = new Book("The monk who solid his ferrari", "Rober kiosaki");
// const book2 = new Book("The Life", "Tamilselvan");

// const library = new Library();

// library.addBook(book1);
// library.addBook(book2);

// library.listAvailableBooks();

// library.barrowedBook(book1, 101);

// console.log(library.barrowedBooks[0].Book);

//share area calculato

// class Shape {
//   calculateArea() {
//     return 0;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   calculateArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Triangle extends Shape {
//   constructor(base, height) {
//     super();
//     this.base = base;
//     this.height = height;
//   }

//   calculateArea() {
//     return 0.5 * this.base * this.height;
//   }
// }

// const rectangle = new Rectangle(10, 10);
// console.log(`Rectangle Area: ${rectangle.calculateArea()}`);

// const circle = new Circle(5);
// console.log(`Circle Area: ${circle.calculateArea().toFixed(2)}`);

// const triangle = new Triangle(10, 10);
// console.log(`Triangle Area: ${triangle.calculateArea()}`);

//vehicle inhertance example

// class Vehicle {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   displayInfo() {
//     console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model, year, numDoors) {
//     super(make, model, year);
//     this.numDoors = numDoors;
//   }
//   displayInfo() {
//     super.displayInfo();
//     console.log(`Doors: ${this.numDoors}`);
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, year, numDoors) {
//     super(make, model, year);
//     this.numDoors = numDoors;
//   }

//   displayInfo() {
//     super.displayInfo();
//     console.log(`Doors: ${this.numDoors}`);
//   }
// }

// class MotorCycle extends Vehicle {
//   constructor(make, model, year) {
//     super(make, model, year);
//   }
// }

// const myCar = new Car("Renault", "Triber", 2024, 4);
// console.log(myCar);
// myCar.displayInfo();

// const myTruck = new Truck("Benz", "X-10", 2022, 2);
// myTruck.displayInfo();

// const myMotorCycle = new MotorCycle("Yamaha", "FZ V-3", 2019);
// console.log(myMotorCycle);
// myMotorCycle.displayInfo();
