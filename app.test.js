const calculateTotal = require("./app");

test("calculates order total correctly", () => {
    expect(calculateTotal(500, 2)).toBe(1000);
});