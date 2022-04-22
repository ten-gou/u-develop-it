const mysql = require('mysql2');

// Connect to sql database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'S^n+^Lu+h1c^',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );  

  module.exports = db;