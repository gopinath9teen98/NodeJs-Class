const url = require('url')
const http=require('http')

http.createServer((request,response)=>{
    const reqUrl=url.parse(request.url,true)
    console.log(reqUrl.query.id);
    console.log(reqUrl.query.name);
    response.write('this has come from server');
    response.write(JSON.stringify(reqUrl.query));
    response.end();
}).listen(3000,()=>{
    console.log('the server is listening on port no 3000');
})