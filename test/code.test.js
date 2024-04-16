const {
  greet,
  welcome,
  shopping,
  user,
  login,
  calculateDiscount
} = require("./../code");
const service = require("./../service");
const Calculator = require("./../tdd");

describe("greet", () => {
  it("greet - should be return true if a bigger dan b", () => {
    const result = greet(10, 5);
    expect(result).toBe(true);
  });

  it("greet - should be return false if a less dan b", () => {
    const result = greet(5, 10);
    expect(result).toBe(false);
  });

  it("greet - should be return true if a equal dan b", () => {
    const result = greet(5, 5);
    expect(result).toBe(true);
  });
});

describe("welcome", () => {
  it("should return welcome message to my test page", () => {
    const result = welcome("mahtab");
    expect(result).toContain("mahtab");
  });
});

describe("shopping", () => {
  it("should return shopping list of milk on it", () => {
    const result = shopping();
    expect(result).toContain("milk");
  });
});

describe("user", () => {
  it("should return my obj", () => {
    const result = user();
    expect(result).toEqual({
      id: 1,
      name: "mahtab"
    });
  });
});

describe("login", () => {
  it("should return throw Error when password is wrong", () => {
    expect(() => {
      login("13456");
    }).toThrow();
  });
  it("should return jwt if password is correct", () => {
    const result = login("1234");
    expect(result).toHaveProperty("jwt");
  });
});

describe("calculateDiscount", () => {
  it("should return 10 if count more than 3 count", () => {
    service.sendEmail = jest.fn();
    service.getUserById = jest.fn().mockReturnValue({
      id: 1,
      name: " mahtab",
      count: 5
    });
    expect(calculateDiscount()).toBe(10);
  });
  it("should return 0 if count less than 3", () => {
    service.sendEmail = jest.fn();
    service.getUserById = jest.fn().mockReturnValue({
      id: 2,
      name: " sarah",
      count: 2
    });
    expect(calculateDiscount()).toBe(0);
  });
});

describe("calculator", () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator(10, 5);
  });
  it("Should have a and b property", () => {
    expect(calculator).toHaveProperty("a");
    expect(calculator).toHaveProperty("b");
  });
  it("add", () => {
    expect(calculator.add()).toBe(15);
  });
  it("sub", () => {
    expect(calculator.sub()).toBe(5);
  });
  it("div", () => {
    expect(calculator.div()).toBe(2);
  });
  it("mul", () => {
    expect(calculator.mul()).toBe(50);
  });
});
