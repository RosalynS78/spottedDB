const axios = require('axios')
const mysql2 = require('mysql2')
// const bcrypt = require('bcrypt')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')

// for bcrypt
const saltRounds = 10

const signup = (req, res) => {
  const { username, email, password } = req.body
  let sql = "INSERT INTO usersCredentials (username, email, password) VALUES (?, ?, ?)"

  argon2.hash(password, saltRounds, function(err, hash) {
    sql = mysql2.format(sql, [ username, email, hash ])
  
    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('Username is taken')
        return handleSQLError(res, err)
      }
      return res.send('Sign-up successful')
    })
  })
}

const login = (req, res) => {
  const { username, password } = req.body

  axios(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      grant_type: 'password',
      username: username,
      password: password,
      audience: process.env.AUTH0_IDENTITY,
      connection: 'Username-Password-Authentication',
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET
    }
  })
  .then(response => {
    const { access_token } = response.data
    res.json({
      access_token
    })
  })
  .catch(e => {
    res.send(e)
  })

  let sql = "SELECT * FROM usersCredentials WHERE username = ?"
  sql = mysql2.format(sql, [ username ])

  
  pool.query(sql, async (err, results) => {
    if (err) return handleSQLError(results, err)

    if (!results.length) return res.status(404).send('No matching users')
    
    const hash = results[0].password
    argon.compare(password, hash)
      .then(result => {
        if (!result) return res.status(400).send('Invalid password')
 
        const data = { ...results[0] }
        data.password = 'REDACTED'

        const token = jwt.sign(data, 'secret')
        res.json({
          msg: 'Login successful',
          token
        })
      })
  })
}



module.exports = {
  signup,
  login
}