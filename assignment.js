var fs = require('fs');
 
// fs.writeFileSync('./demo/newfile.txt', 'HI,I AM ', function (err) {
//   if (err) throw err;
//   console.log('File is created successfully.');
// });
// console.log(fs.readFileSync("./demo/newfile.txt", "utf8"));

// fs.appendFile("./demo/newfile.txt", "GOPINATH", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       console.log(fs.readFileSync("./demo/newfile.txt", "utf8"));
//     }
//   })

  // fs.rename('./demo/newfile.txt', './demo/renamedfile.txt', () => {
  //   console.log("\nFile Renamed!\n  ");
  // })


  const url = require('url')
const http=require('http')

  http.createServer((request,response)=>{
    const reqUrl=url.parse(request.url,true)
   
    fs.appendFile("./demo/renamedfile.txt", reqUrl.query , (err) => {
        if (err) {
          console.log(err);
        }
        else {
          console.log(fs.readFileSync("./demo/renamedfile.txt", "utf8"));
        }
      })
    
    response.end();
  }).listen(3000,()=>{
    console.log('the server is listening on port no 3000');
})