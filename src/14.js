// Get a random number between 1 and 10
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

// Get a random operator (+, -, x, /)
const getRandomOperator = () => ['+', '-', 'x', '/'][getRandomNumber()];

// Get a random math problem with a solution
const getRandomMathProblem = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const answer = eval(`${num1} ${operator} ${num2}`);
  return `${num1} ${operator} ${num2} = ${answer}`;
};

// Get a random math problem with a solution (advanced)
const getRandomMathProblemAdvanced = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const answer = eval(`${num1} ${operator} ${num2}`);
  return `${num1} ${operator} ${num2} = ${answer}`;
};

// Get a random math problem with a solution (advanced)
const getRandomMathProblemHard = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const answer = eval(`${num1} ${operator} ${num2}`);
  return `${num1} ${operator} ${num2} = ${answer}`;
};

// Get a random math problem with a solution (advanced)
const getRandomMathProblemExpert = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const answer = eval(`${num1} ${operator} ${num2}`);
  return `${num1} ${operator} ${num2} = ${answer}`;
};
