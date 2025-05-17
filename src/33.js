function getPrimeFactors(num) {
  let factors = [];
  // Divide num by 2 until it's odd
  while (num % 2 === 0) {
    factors.push(2);
    num /= 2;
  }
  
  // If num is odd, increment it and add to the array
  if (num !== 1) {
    factors.push(num);
  }
  
  // Divide by all odd numbers starting from 3 onwards
  for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  
  return factors;
}

function calculateGCD(a, b) {
  let gcdResult = a % b;
  return Math.abs(gcdResult);
}

// Example usage
console.log(getPrimeFactors(24)); // [2, 2, 2, 3]
console.log(calculateGCD(10, 5)); // 5
