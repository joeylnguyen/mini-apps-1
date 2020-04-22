const express = require('express');
const fs = require('fs');

// MODEL
const convertJSONtoCSV = (data , callback) => {
  let parsedData = JSON.parse(data);
  const columnHeaders = Object.keys(parsedData);
  // Remove children key from headers
  columnHeaders.pop();
  columnHeaders.join(',');
  console.log(parsedData);
  console.log(columnHeaders);

  let str = '';

  const traverseData = (object) => {
    let line = '';

    for (let key in object) {
      if (key === 'children') {
        for (let i = 0; i < object.children.length; i++) {
         traverseData(object.children[i]);
        }
      } else {
        if (line !== '') {
          line += ',';
          line += object[key];
        } else {
          line += object[key];
        }
        console.log(line);
      }
    }
    str += line + '\r\n';
  }

  traverseData(parsedData);
  let result = columnHeaders + '\r\n' + str;

  callback(null, result);
}



/* SERVER */
const app = express();

// MIDDLEWARE
app.use(express.static('client'));
app.use(express.urlencoded());
app.use(express.json());
app.use((req,res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`)
  // console.log(req.body);
  next();
})

// ROUTE
app.post('/json_files', (req, res) => {
  convertJSONtoCSV(req.body.jsonData, (error, data) => {
    if (error) {
      console.error(error);
      res.status(400).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(3000, () => console.log('Listening on port 3000'));


/* The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
You may also assume that child records in the JSON will always be in a property called `children`.
*/
