const http = require('http');
const fs = require('fs');
// another wayfunction rqListener(req,res){}
//http.createServer(rqListener);
//another way  http.createServer(function(req,res){  });
 const server = http.createServer((req, res) => { 
     const url= req.url;
     const method = req.method;
     if(url === '/')
     {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type = "Submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); 
     }
     if(url == '/message' & method === 'POST')
     {
         const body=[];
         req.on('data' , (chunk) =>
         {
             console.log(chunk);
             body.push(chunk);
         });
         req.on('end' , () =>
         {
             const parsedBody=Buffer.concat(body).toString();
             console.log(parsedBody);
             const message= parsedBody.split('=')[1];
             fs.writeFile('message.txt' , message, (err) =>
             {
                 //res.statusCode(302);
                res.setHeader('Location','/');
                return res.end();

             });
         });
        }
     // process.exit();
     res.setHeader('content-type', 'text/html')
     res.write('<html>');
     res.write('<head><title>My First Page</title></head>');
     res.write('<body>Hello from NodeJs Server</body>');
     res.write('</html>');
     res.end();
 });
server.listen(3000);

