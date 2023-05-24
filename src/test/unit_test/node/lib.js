const db = require("./db");
//test the numbers

module.exports.absolute = (number) => {
  return number >= 0 ? number : -number;
};

//test the string

module.exports.greet = (name) => {
  return `hello ${name}`;
};

//test the array

module.exports.countries = () => {
  return ["America", "India", "Italy"];
};

module.exports.product = (productId) => {
  return { id: productId, price: 10, category: "groccery" };
};

//exception

module.exports.register = (username) => {
  if (!username) throw new Error("username is required");
  return { id: new Date().getTime(), username: username };
};

//fizzBuzz

module.exports.fizzBuzz = (input) => {
  if (typeof input !== "number") {
    throw new Error("Input should be Number");
  }

  if (input % 3 === 0 && input % 5 === 0) {
    return "FIZZBUZZ";
  }
  if (input % 3 === 0) {
    return "FIZZ";
  }
  if (input % 5 === 0) {
    return "BUZZ";
  }
  return input;
};

//mock function

module.exports.nodifyCustomer = (order) => {
  const customer = db.getCustomerSync(order.customerId);

  Mail.send(customer.email, "your order was placed successfully");
};
