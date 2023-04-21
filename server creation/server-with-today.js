
const http = require(`http`);
const current_time = require(`./today`); //another js is attatched

let requestListener = (req, res) =>
{
res.writeHead(200);
res.end(`Hello Bangladesh. It is your current time : ${current_time.getDate()} `);
}; 

//port initializing 
var port=8080;
var server=http.createServer(requestListener);
console.log("The server is listening to port : "+port);
server.listen(port);




