const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
    setDiscount(value) {
    // захист від невалідного значення
    //   if (value < 0 || value > 1) {
    // throw new Error('Discount must be between 0 and 1');
  }
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
    addOrder(cost, order) {
    // захист від невалідного значення
    //   if (cost < 0) {
    // throw new Error('Cost must be a positive number');
  }
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
