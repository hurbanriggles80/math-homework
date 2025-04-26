let express = require('express');
let app = express();

app.get('/', function(req, res) {
  let data = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
