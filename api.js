// Entry Point of the API Server 
import pool from './db/dbConnection.js';
import app from './server.js';
import bodyParser from 'body-parser';

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
