const mysql = require('mysql2')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')

// for later if i create an admin

// const getAllUsers = (req, res) => {
//   pool.query("SELECT * FROM users", (err, rows) => {
//     if (err) return handleSQLError(res, err)
//     return res.json(rows);
//   })
// }

// const getUserById = (req, res) => {
//   let sql = "SELECT * FROM users WHERE id = ?"
//   sql = mysql.format(sql, [ req.params.id ])

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err)
//     return res.json(rows);
//   })
// }

const updateUser = (req, res) => {
  const { firstName, lastName, email, phone } = req.body
  let sql = "UPDATE users SET first_name = '?', last_name = '?',  email = '?', phone = '?' WHERE id = ?"
  sql = mysql.format(sql, [ firstName, lastName, email, phone, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteUser= (req, res) => {
  let sql = "DELETE FROM users WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}


const createUser = (req, res) => {
  const { firstName, lastName, email, phone } = req.body
  let sql = "UPDATE users SET first_name = '?', last_name = '?',  email = '?', phone = '?' WHERE id = ?"
  sql = mysql.format(sql, [ firstName, lastName, email, phone, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}



module.exports = {
  // getAllUsers,
  // getUserById,
  createUser,
  updateUser,
  deleteUser,
}