const mysql = require('mysql2')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

const getUserById = (req, res) => {
  let sql = "SELECT * FROM users WHERE id= ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

const updateUserById = (req, res) => {
  const { password } = req.body;
  let sql = "UPDATE users SET password = ? WHERE id= ?";
  sql = mysql.format(sql, [password, req.params.id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteUser= (req, res) => {
  let sql = "DELETE FROM users WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

const createUser = (req, res) => {
  const { username, email, password, contact } = req.body;
  let sql = "INSERT INTO users (username, email, password, contact) VALUES (?, ?, ?, ?)";
  sql = mysql.format(sql, [username, email, password, contact]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
}