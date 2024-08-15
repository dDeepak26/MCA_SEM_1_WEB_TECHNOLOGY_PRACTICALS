const http = require('http');
const server = http.createServer((req, res) => {
  const name = 'Deepak Durgam';
  const age = '20';
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Name: ${name}\nAge: ${age}`);
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
