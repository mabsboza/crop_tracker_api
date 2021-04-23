// Entry Point of the API Server 
const express = require('express');
const pool = require('./db/dbConnection');
const app = require('./server');

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
  
pool.connect((err, client, release) => {
  if (err) {
    return console.error(
      'Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
      release()
      if (err) {
        return console.error(
          'Error executing query', err.stack)
      }
      console.log("Connected to Database !")
  })
})
  
app.get('/testdata', (req, res, next) => {
  console.log("TEST DATA :");
  pool.query('Select * from users')
    .then(testData => {
      console.log(testData);
      res.send(testData.rows);
    })
})

// Create a Server and run it on the port 3000
const server = app.listen(3000, function () {
  let host = server.address().address
  let port = server.address().port
})