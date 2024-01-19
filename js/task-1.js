"use strict";
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    if (typeof value === "number" && value >= 0 && value <= 1) {
      this.discount = value; // check if the discount is a valid number
    } else {
      console.error("Discount should be a number between 0 and 1");
    }
  },
  getOrders() {
    return this.orders;
  },
  calculateOrderPrice(cost) {
    return cost - cost * this.discount;
  },
  //check that cost is a valid number
  addOrder(cost, order) {
    if (typeof cost !== "number") {
      console.error("Cost should be a number");
      return;
    }
    const discountedPrice = this.calculateOrderPrice(cost);
    this.balance -= discountedPrice;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// customer.setDiscount(1.05);
// console.log(customer.getDiscount()); // "Discount should be a number between 0 and 1"
