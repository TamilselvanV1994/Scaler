class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  bookDetails() {
    for (let key in this) {
      const value = this[key];
      console.log(`${key.toUpperCase()}: ${value}`);
    }
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }

  bookDetails() {
    super.bookDetails();
  }
}

const book1 = new Ebook("The Life", "Tamilselvan", 2040, 500);

book1.bookDetails();
