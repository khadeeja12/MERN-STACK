const http=require("http");
const fs=require("fs");
const path=require("path");

const server =http.createServer((req,res)=>{
    let filePath='';
    let contentType='text/html';
    switch(req.url)
    {
        case '/':
            filePath=path.join(__dirname,"views","index.html");
            break;
        case '/contact':
            filePath=path.join(__dirname,"views","contact.html");
            break;
        default:
            filePath=path.join(__dirname,"views","404.html");
            break;

    }

    fs.readFile(filePath,"utf8",(err,data)=>{
        if(err){
            res.writeHead(500,{"Content-Type":contentType});
        }
        else{
            res.writeHead(200,{"Content-Type":contentType});
            res.end(data);
        }
    });
    
});

server.listen(3000,()=>{
    console.log("listening to http://localhost"+server.address().port);
});