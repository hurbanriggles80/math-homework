// Get a random number between 1 and 10
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

// Get a random math problem based on the difficulty level (easy, medium, hard)
const getRandomProblem = difficultyLevel => {
  // Define the math problems for each difficulty level
  const easyProblems = [
    "2 + 2",
    "3 x 3",
    "4 - 1"
  ];
  const mediumProblems = [
    "5 + 5",
    "7 x 7",
    "9 - 2"
  ];
  const hardProblems = [
    "10 + 10",
    "15 x 15",
    "18 - 3"
  ];

  // Choose a random problem based on the difficulty level
  if (difficultyLevel === "easy") {
    return easyProblems[Math.floor(Math.random() * easyProblems.length)];
  } else if (difficultyLevel === "medium") {
    return mediumProblems[Math.floor(Math.random() * mediumProblems.length)];
  } else if (difficultyLevel === "hard") {
    return hardProblems[Math.floor(Math.random() * hardProblems.length)];
  }
};

// Function to solve the math problem
const solveProblem = problem => {
  const solution = eval(problem); // Use eval() function to evaluate the math expression
  console.log(`The solution is ${solution}`);
};

// Call the functions to get a random problem, solve it, and print the result
getRandomProblem("easy");
solveProblem(getRandomProblem("medium"));
solveProblem(getRandomProblem("hard"));
