// server initialization

const http = require(`http`);

let requestListener = (req, res) =>
{
res.writeHead(200);
res.end("Server is responding");
}; 

//port initializing 
var port=8080;
var server=http.createServer(requestListener);
console.log("The server is listening to port : "+port);
server.listen(port);



// server is ready to listen 
