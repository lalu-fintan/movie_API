const lib = require("./node/lib");
const db = require("./node/db");

//test the numbers
test("absolute-should return a positive number ,if the input is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

//grouping tests
describe("absolute", () => {
  it("should return a positive number ,if the input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number ,if the input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it("should return a 0 ,if the input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

//test the string
describe("greet", () => {
  it("should retunr the greet value", () => {
    const result = lib.greet("laluprasath");
    // expect(result).toMatch(/laluprasath/);
    expect(result).toContain("laluprasath");
  });
});

// test the array

describe("getCountries", () => {
  it("find the countries", () => {
    const result = lib.countries();

    expect(result).toContain("India");

    //specific
    expect(result[2]).toBe("Italy");
  });
});

//test the object

describe("getProduct", () => {
  it("should return the product", () => {
    const result = lib.product(1);
    // expect(result).toEqual({ id: 1, price: 10 }); // dont use
    // expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});

//test the exception

describe("register", () => {
  it("shouldn't have username", () => {
    const args = [null, undefined, NaN, 0, "", false];
    args.forEach((a) => {
      expect(() => {
        lib.register(a);
      }).toThrow();
    });
  });

  it("should have a valid  username", () => {
    const result = lib.register("laluprasath");
    expect(result).toMatchObject({ username: "laluprasath" });
    expect(result.id).toBeGreaterThan(0);
  });
});

describe("FizzBuzz", () => {
  it("should  have a number", () => {
    expect(() => {
      lib.fizzBuzz("a");
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz({});
    }).toThrow();
  });

  it("should return input is devisable to 3 and 5  ", () => {
    const result = lib.fizzBuzz(15);
    expect(result).toBe("FIZZBUZZ");
  });
  it("should return input is devisable to 3  ", () => {
    const result = lib.fizzBuzz(3);
    expect(result).toBe("FIZZ");
  });

  it("should return input is devisable to  5  ", () => {
    const result = lib.fizzBuzz(5);
    expect(result).toBe("BUZZ");
  });

  it("should return input is not devisable to 3 and 5  ", () => {
    const result = lib.fizzBuzz(1);
    expect(result).toBe(1);
  });
});

describe("customers", () => {
  it("should apply 10% discount  if customer has more then 10 points ", () => {
    db.getCustomerSync = (customerId) => {
      console.log("fake reading");
      return { id: customerId, point: 20 };
    };
  });
});
