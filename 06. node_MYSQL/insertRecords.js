const mysql = require('mysql2');
const dbConfig = {
    host: 'localhost',
    user: 'root', 
    password: 'root', 
    database: 'deepak' 
  };
const pool = mysql.createPool(dbConfig);
const newStudent = {
  studentID: 69,
  studentName: 'Bhupendra Jogi',
  DOB: '1990-01-01', 
  courseID: 11, 
  gender: 'M', 
  degree: 'Australia',
  yearPassedOut: 2023 
};
pool.query('INSERT INTO Student SET ?', newStudent, (err, results) => {
  if (err) {
    console.error('Error executing INSERT query:', err);
    return;
  }
  console.log('Inserted record:', results);
  pool.end((err) => {
    if (err) {
      console.error('Error closing the database connection pool:', err);
      return;
    }
    console.log('Connection pool closed');
  });
});