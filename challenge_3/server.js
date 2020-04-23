/* SERVER */
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

// ROUTERS
app.get('/', (req, res) => {
  res.send('hello!');
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('hi');
})

app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}`)});

/* CONTROLLER */
// TODO Build post request handler that calls model function
// TODO Build get request handler that calls model function


/* MODEL */
// TODO Build function that handles database queries for post that adds user data to table
// TODO Build function that handles database queries for get that gets the next available ID

/* DATABASE */
// TODO Launch database
// TODO Create schema
// TODO Build tables