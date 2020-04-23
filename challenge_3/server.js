const express = require('express');
const app = express();

const PORT = 3000;

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  console.log(`Body: ${req.body}`);
  next();
})

app.get('/', (req, res) => {
  res.send('hello!');
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('hi');
})

app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}`)});

