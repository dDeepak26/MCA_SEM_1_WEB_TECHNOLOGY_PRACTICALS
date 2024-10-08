const mysql = require('mysql2');
const dbConfig = {
  host: 'localhost',
  user: 'root', 
  password: 'root', 
  database: 'deepak' 
};

const connection = mysql.createConnection(dbConfig);
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');

  connection.end((err) => {
    if (err) {
      console.error('Error closing the database connection:', err);
      return;
    }
    console.log('Connection closed');
  });
});
