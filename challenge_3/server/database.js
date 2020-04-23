/* DATABASE */
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'db_checkout'
})

db.connect();

module.exports = {
  db: db
}
