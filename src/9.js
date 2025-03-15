// Homework problem: Find the sum of all numbers from 1 to 100 that are divisible by either 3 or 5 but not both

function findSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 || numbers[i] % 5 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findSum(numbers)); // should print 100
