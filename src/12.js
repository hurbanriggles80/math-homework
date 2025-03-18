const math = require('mathjs');

function getSolution() {
  const equation = '2x + 3 = 7';
  const solution = math.solve(equation);
  return solution;
}

console.log(getSolution());
