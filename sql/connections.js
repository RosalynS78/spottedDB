// let mysql = require('mysql2');

// let connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
// })

// connection.connect();

// connection.query("select now()", function(err, results){
//     if(err){
//         console.log("connection error", err)
//     } else {
//         console.log("connected to database", results);
//     }
// })

// module.exports = connection; 

require('dotenv').config()
const mysql = require('mysql2')


class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')

      const config = {
        connectionLimit: 100,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DEFAULT_SCHEMA
      }

      this.pool = mysql.createPool(config)

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;