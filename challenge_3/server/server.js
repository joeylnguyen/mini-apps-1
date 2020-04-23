/* SERVER */
const express = require('express');
const app = express();

const PORT = 3000;

// IMPORT CONTROLLER FUNCTIONS
const {handlePostData, handleGetId} = require('./controller.js')

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  console.log(`Body: ${req.body}`);
  next();
})

// ROUTERS
app.get('/id', handleGetId);

app.post('/', handlePostData);

app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}`)});
