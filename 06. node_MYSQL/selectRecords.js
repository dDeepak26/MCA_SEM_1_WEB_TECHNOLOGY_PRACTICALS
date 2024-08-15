const mysql = require('mysql2');
const dbConfig = {
    host: 'localhost',
    user: 'root', 
    password: 'root', 
    database: 'deepak' 
  };
  const pool = mysql.createPool(dbConfig);
  pool.query('SELECT * FROM Student', (err, results) => {
    if (err) {
      console.error('Error executing SELECT query:', err);
      return;
    }
    console.log('Result:', results);
    pool.end((err) => {
      if (err) {
        console.error('Error closing the database connection pool:', err);
        return;
      }
      console.log('Connection pool closed');
    });
  });