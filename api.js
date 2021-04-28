// Entry Point of the API Server 
import pool from './db/dbConnection.js';
import app from './server.js';
import bodyParser from 'body-parser';
import usersRoute from './routes/userRoute.js';

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

app.get('/', function (req, res) {
  res.send('Express application working ...');
});

app.use('/api/v1', usersRoute);
