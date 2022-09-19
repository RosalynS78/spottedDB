const mysql = require('mysql2')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')


const getAllLost = (req, res) => {
  pool.query("SELECT * FROM lost", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const updateLost = (req, res) => {
    const { name, gender, age, species, photo, date} = req.body
    let sql = "UPDATE lost SET name = '?', gender = '?',  age = '?', species = '?', photo = '?', date = '?' WHERE id = ?"
    sql = mysql.format(sql, [ name, gender, age, species, photo, date, req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.status(204).json();
    })
  }
  
  const deleteLost = (req, res) => {
    let sql = "DELETE FROM lost WHERE id = ?"
    sql = mysql.format(sql, [ req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
    })
  }
  
  const createLost = (req, res) => {
    const { name, gender, age, species, photo, date} = req.body
    let sql = "UPDATE lost SET name = '?', gender = '?',  age = '?', species = '?', photo = '?', date = '?' WHERE id = ?"
    sql = mysql.format(sql, [ name, gender, age, species, photo, date, req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.status(204).json();
    })
  }
  
  
  module.exports = {
    getAllLost,
    createLost,
    updateLost,
    deleteLost,
  }