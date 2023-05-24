
const fs = require('fs');
const http = require('http');
const port = 8080;


http.createServer((req, res) => {
  fs.open('ICT question.txt', 'r', (err, fd) => {
    if (err) {
      console.log(err);
      res.writeHead(500);
      res.end('Error opening the file');
    } else {

      fs.readFile(fd, (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(500);
          res.end('Error reading the file');
        }
         else {
          res.writeHead(200);
          res.write(data);
          res.end();
        }

        fs.close(fd, (err) => {
          if (err) {
            console.log(err);
          }
        });
      });
    }
  });
}).listen(port);
console.log('Server is listening to port: ' + port);
