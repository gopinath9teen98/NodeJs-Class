const http= require("http");
const handler=require('./handler')
const server=http.createServer(handler.handleRequest).listen(5000,()=>{
    console.log('this server listening on the port number 3000');
})
