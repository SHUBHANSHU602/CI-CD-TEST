const isPalindrome = require("../src/palindrome");

test("madam should be palindrome", () => {
  expect(isPalindrome("madam)).toBe(true);
});

test("hello should not be palindrome", () => {
  expect(isPalindrome("hello")).toBe(false);

});
