
const express = require("express");
const http = require("http");
const mysql = require("mysql2");
const app = express();

express.json();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'deepak'
  });

http.createServer((req, res) => {
    if(req.url === '/student'){
        connection.query('SELECT * FROM student',(err, results, fields) => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(results));
        });
    }
    else if(req.url.startsWith('/student/')){
        const id = req.url.split('/').pop();
        connection.query(`SELECT * FROM student where studentID = ${id}`,(err, results, fields) => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(results));
        })
    }else if(req.url === '/course'){
      connection.query(`SELECT * FROM course`,(err, results, fields) => {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(results));
      })
    }else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: "Bad Request"}));
    }
}).listen(4000);