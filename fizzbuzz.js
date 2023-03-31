module.exports = function () {
  // write your code here
  let array = [];
  let number = 100;
  for (let i = 1; i <= number; i++) {
    let value =
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 5 === 0
        ? "Buzz"
        : i % 3 === 0
        ? "Fizz"
        : i;
    array.push(value);
  }
  return array;
};
