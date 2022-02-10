const http = require('http')
const fs=require('fs')


http.createServer((request,response)=>{
    if(request.url==='/' & request.method==='GET'){
        fs.readFile('view/view.txt',(err,data)=>{
            if(err){
                response.writeHead(404,{
                    'Content-Type':'text/plain'
                }
                )
                response.write('File not Found')
                response.end()

            }
            else{
                response.writeHead(200,{
                    'Content-Type':'text/html'
                })
                response.write(data)
                response.end()
            }
        })
    }
    else{
        response.writeHead(404,{
            'Content-Type':'text/plain'
        })
        response.write('file not found or wrong method')
    }
}).listen(4000,()=>{
    console.log('the server is listening on port no 4000');
})