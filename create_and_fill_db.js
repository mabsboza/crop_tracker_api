import dotenv from 'dotenv';
import  pgtools from "pgtools";
import  pool  from './db/dbConnection.js';

dotenv.config();
/**
 * Create Database
 */
const setUpEnvironment = () => {
  //Create User table
  createUserTable();
  //Create Role table
};


pgtools.createdb(process.env.DATABASE_URL, process.env.DB_DATABASE, function(err, res) {
  if (err) {
    console.error("Error, Database was not created");
    process.exit(-1);
  }
  console.log("Database created!");
  setUpEnvironment();
});

const createUserTable = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
  (id SERIAL PRIMARY KEY, 
  email VARCHAR(100) UNIQUE NOT NULL, 
  first_name VARCHAR(100), 
  last_name VARCHAR(100), 
  password VARCHAR(100) NOT NULL,
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL)`;
  

  pool
    .query(userCreateQuery)
    .then(res => {
      console.log("Table has been created");
    })
    .catch(err => {
      console.log("Error, Table was not created!");
    });
};
