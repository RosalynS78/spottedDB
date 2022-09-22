const mysql = require('mysql2')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')

// for later if i create an admin

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserById = (req, res) => {
  let sql = "SELECT * FROM users WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const updateUserById = (req, res) => {
  const { password } = req.body;
  let sql = "UPDATE users SET password = ? WHERE id = ?";
  sql = mysql.format(sql, [password, req.params.id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

// const updateUser = (req, res) => {
//   const { firstName, lastName, phone, email, username, password} = req.body
//   let sql = "UPDATE users SET first_name = '?', last_name = '?', phone = '?', email = '?', username = '?' WHERE id = ?"
//   sql = mysql.format(sql, [ firstName, lastName, phone, email, username, req.params.id ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

const deleteUser= (req, res) => {
  let sql = "DELETE FROM users WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}


const createUser = (req, res) => {
  const { firstName, lastName, phone, email, username } = req.body
  let sql = "UPDATE users SET first_name = '?', last_name = '?', phone = '?', email = '?', username = '?' WHERE id = ?"
  sql = mysql.format(sql, [ firstName, lastName, phone, email, username, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}



module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
}