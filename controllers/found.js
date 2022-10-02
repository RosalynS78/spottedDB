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
    const {gender, name, species, date, email, phone, comments, userId} = req.body
    let sql = "UPDATE found SET gender = ?, name = ?, species = ?, date = ?, email = ?,  phone = ?, comments = ?, userId = ? WHERE foundId = ?"
    sql = mysql.format(sql, [ gender, name, species, date, email, phone, comments, userId, req.params.id ])
  
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
    const {gender, name, species, date, email, phone, comments, userId} = req.body
    let sql = "INSERT INTO found (gender, name, species, date, email, phone, comments, userId) VALUES (?, ?, ?, ?, ?, ?, ?, userId)";
    sql = mysql.format(sql, [gender, name, species, date, email, phone, comments, userId, req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ newId: results.insertId });
    })
  }

  // figure out how to tie user and found id and how to increment userId
  const getFoundByUserId= function(req, res){
    let userId = req.params.id;
  
    let sql = "select * from found where userId= ?";
    
    let params = []; 
    params.push(userId); 
    
    db.query(sql, params, function(err, results){
        if(err) {
            console.log("failed to execute query:", err);
            res.sendStatus(500); 
       
        } else {
            if(results.length >= 1){
                res.json(results)
                console.log("this is it")
            } else if (results.length == 0) {
              
                res.sendStatus(404);
                console.log("no results")
                
            }
        }
    })
    
};




  
  
  module.exports = {
    getAllFound,
    getFoundById,
    createFound,
    updateFound,
    deleteFound,
    getFoundByUserId
  }