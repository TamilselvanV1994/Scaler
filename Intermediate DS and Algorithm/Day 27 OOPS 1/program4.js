class Product {
  constructor(productId, name, price) {
    this.productId = productId;
    this.name = name;
    this.price = price;
  }

  totalPrice(quatity) {
    console.log(`Total Price: ${this.price * quatity}`);
  }
}

class PersonalCareProduct extends Product {
  constructor(productId, name, price, expire) {
    super(productId, name, price);
    this.expire = expire;
  }
}

const bill1 = new PersonalCareProduct(101, "Shampoo", 5, "10-10-2024");

bill1.totalPrice(3);
