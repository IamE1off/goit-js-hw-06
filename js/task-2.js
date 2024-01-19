"use strict";
class Storage {
  #items;
  constructor(items) {
    this.#items = items || [];
  }

  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    if (!newItem) {
      console.error("Please provide a valid item to add."); //error handling in the addItem method to ensure that the newItem parameter is provided.
      return;
    }
    this.#items.push(newItem);
  }
  // make the removeItem method case-insensitive,  convert both the item to remove and the items in the array to lowercase or uppercase before comparing them.
  removeItem(itemToRemove) {
    if (!itemToRemove) {
      console.error("Please provide a valid item to remove.");
      return;
    }
    const indexToRemove = this.#items.findIndex(
      (item) => item.toLowerCase() === itemToRemove.toLowerCase()
    );
    if (indexToRemove !== -1) {
      this.#items.splice(indexToRemove, 1);
    }
  }
  // removeItem(itemToRemove) {
  //   const indexToRemove = this.#items.indexOf(itemToRemove);
  //   // check if the item exists in the Storage
  //   if (indexToRemove !== -1) {
  //     this.#items.splice(indexToRemove, 1);
  //   }
  // }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
