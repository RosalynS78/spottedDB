const mysql = require('mysql2')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')

const getAllFound = (req, res) => {
  pool.query("SELECT * FROM found", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const updateFound = (req, res) => {
    const { name, gender, age, species, photo, date} = req.body
    let sql = "UPDATE lost SET name = '?', gender = '?',  age = '?', species = '?', photo = '?', date = '?' WHERE id = ?"
    sql = mysql.format(sql, [ name, gender, age, species, photo, date, req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.status(204).json();
    })
  }
  
  const deleteFound = (req, res) => {
    let sql = "DELETE FROM lost WHERE id = ?"
    sql = mysql.format(sql, [ req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
    })
  }
  
  const createFound = (req, res) => {
    const { name, gender, age, species, photo, date} = req.body
    let sql = "UPDATE lost SET name = '?', gender = '?',  age = '?', species = '?', photo = '?', date = '?' WHERE id = ?"
    sql = mysql.format(sql, [ name, gender, age, species, photo, date, req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.status(204).json();
    })
  }
  
  
  module.exports = {
    getAllFound,
    createFound,
    updateFound,
    deleteFound,
  }