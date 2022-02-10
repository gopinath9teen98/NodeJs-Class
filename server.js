const http=require('http')
const server=http.createServer((request,response)=>{
    console.log('server has benn created');
    console.log('request',request);
    console.log('response',response);
    response.write("this is the first part of the response")
    response.write("this is the second part of the response")
    response.end('this is the first server we have created')

})
server.listen(4000,()=>{
    console.log('server is listening on port number 4000');
})