let http = require(`http`);
let port =8080;
http.createServer((req, res)=>
{
        res.writeHead(200);
        res.write('The server is responding. Server is sending the confirmation');
        res.end();
}).listen(port);
console.log('server is listening to port : '+port);

