const mysql = require('mysql2')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')

const getAllFound = (req, res) => {
  pool.query("SELECT * FROM found", (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

const getFoundById = (req, res) => {
  let sql = "SELECT * FROM found WHERE foundId = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

const updateFound = (req, res) => {
    const {gender, species, photo, date} = req.body
    let sql = "UPDATE found SET gender = '?', species = '?', photo = '?', date = '?' WHERE foundId = ?"
    sql = mysql.format(sql, [ gender, species, photo, date, req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.status(204).json(results);
    })
  }
  
  const deleteFound = (req, res) => {
    let sql = "DELETE FROM found WHERE foundId = ?"
    sql = mysql.format(sql, [ req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ message: `Deleted ${results.affectedRows} pet(s)` });
    })
  }
  
  const createFound = (req, res) => {
    const {userId, gender, species, photo, date} = req.body
    let sql = "INSERT INTO found (userId, gender, species, photo, date) VALUES (?, ?, ?, ?, ?)";
    sql = mysql.format(sql, [ userId, gender, species, photo, date, req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ newId: results.insertId });
    })
  }
  
  
  module.exports = {
    getAllFound,
    getFoundById,
    createFound,
    updateFound,
    deleteFound,
  }