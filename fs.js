console.log('program started');
const fs = require('fs');
fs.writeFileSync('demo/test.txt','this is the first node js class')

if(!fs.existsSync('demo')){
    //to create folder
    fs.mkdirSync('demo')

}
else{
    fs.writeFileSync('demo/test.txt','this is the first node class')
    console.log('data has been written syccessfullt');
    //to read the file 
    const data=fs.readFileSync('demo/test.txt')
    console.log(data);
    // toString() to convert the data to string 
    console.log(data.toString());
}
console.log('program ended');