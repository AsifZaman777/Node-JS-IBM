let http= require(`http`);

http.createServer(function(req,res)
{
 res.write("Hello from server.");
 res.end(); // end the response from server
}).listen(6000);