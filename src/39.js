function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let count = 0;

for (let i = 1; i <= 10; i++) {
  let randomNumber = getRandomInt(5);
  if (randomNumber > 3) {
    count++;
  }
}
console.log(`The number of times a random number between 1 and 5 occurred is: ${count}`);
