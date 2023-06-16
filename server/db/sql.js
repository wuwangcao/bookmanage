const mysql = require('mysql')
let db = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'admin123',
  database:'book'
})
module.exports = db
