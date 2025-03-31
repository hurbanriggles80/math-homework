let Node = require("node:core");

function calculateSum(numbers) {
  let sum = numbers.reduce((acc, val) => acc + val, 0);
  console.log("The sum of the given numbers is:", sum);
}

calculateSum([1, 2, 3, 4]);
