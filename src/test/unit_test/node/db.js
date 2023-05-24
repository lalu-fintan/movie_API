module.exports.getCustomerSync = (id) => {
  console.log("reading the customers in the mongodb");
  return { id: id, point: 11 };
};

module.exports.getCustomer = async (id) => {
  return new Promise((resolve, reject) => {
    console.log("reading the customers in the mongodb");
    resolve({ id: id, point: 11 });
  });
};
