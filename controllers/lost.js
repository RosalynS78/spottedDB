const mysql = require('mysql2')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')

const getAllLost = (req, res) => {
  pool.query("SELECT * FROM lost", (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

const getLostById = (req, res) => {
  let sql = "SELECT * FROM lost WHERE lostId = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

const updateLost = (req, res) => {
    const { gender, name, species, date, email, phone, comments, userId } = req.body
    let sql = "UPDATE lost SET gender = ?, name = ?, species = ?, date = ?, email = ?, phone = ?, comments = ?, userId = ?, WHERE lostId = ?"
    sql = mysql.format(sql, [ gender, name, species, date, email, phone, comments, userId, req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.status(200).json(results);
    })
  }
  
  const deleteLost = (req, res) => {
    let sql = "DELETE FROM lost WHERE lostId = ?"
    sql = mysql.format(sql, [ req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ message: `Deleted ${results.affectedRows} pet(s)` });
    })
  }
  
  const createLost = (req, res) => {
    const { gender, name, species, date, email, phone, comments, userId} = req.body
    let sql = "INSERT INTO lost (gender, name, species, date, email, phone, comments, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    sql = mysql.format(sql, [gender, name, species, date, email, phone, comments, userId])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err);
      return res.json({ newId: results.insertId });
       
        
    })
  }


  module.exports = {
    getAllLost,
    getLostById,
    createLost,
    updateLost,
    deleteLost,
  }