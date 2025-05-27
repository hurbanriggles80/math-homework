let Node = require('node');
let fs = require('fs');

function writeToFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

writeToFile('file.txt', 'Hello, World!');
