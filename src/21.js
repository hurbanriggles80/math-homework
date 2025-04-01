function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getMathNodejsCode() {
  // Example: simple addition function
  const add = (a, b) => a + b;

  // Example: basic math operations
  const multiply = (a, b) => a * b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;

  return {
    add: add,
    multiply: multiply,
    subtract: subtract,
    divide: divide
  };
}

const mathNodejsCode = getMathNodejsCode();
console.log(mathNodejsCode);
