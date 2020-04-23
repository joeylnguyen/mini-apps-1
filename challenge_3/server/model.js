/* MODEL */
const {db} = require('./database.js');
// TODO Build function that handles database queries for post that adds user data to table
const addData = (data, res) => {
  const {sessionId, name, email, password, address_1, address_2, city, state, zip, credit_card_number, expiration_date, cvv, billing_zip} = data;
  const query = `INSERT INTO checkout_session (name, email, password, address_1, address_2, city, state, zip, credit_card_number, expiration_date, cvv, billing_zip) VALUES ('${name}', '${email}', '${password}', '${address_1}', '${address_2}', '${city}', '${state}', '${zip}', '${credit_card_number}', '${expiration_date}', '${cvv}', '${billing_zip}')`
  db.query(query, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send('Done!');
    }
  });
}
// TODO Build function that handles database queries for get that gets the next available ID
const getId = (data, res) => {
  const query = 'SELECT MAX(id) FROM checkout_session'
  db.query(query, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(results);
    }
  })
}

module.exports = {
  addData: addData,
  getId: getId
}