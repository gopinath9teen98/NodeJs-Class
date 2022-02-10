console.log('program started');
const fs=require('fs')
const writeFile=()=>{
fs.writeFile('view/view.txt','this is Node js',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('dat has been written successfully');
    }
})
}
const readFile=()=>{
    fs.readFile('view/view.txt',(err,data)=>{
        if(err){
            console.log("error",err);
        }
        else{
            console.log('the data in the file',data.toString());
        }
    })
}
fs.exists('view',(exists)=>{
    

if(!exists){
    fs.mkdir('view',(foldererr)=>{
        if(foldererr){
            console.log('folder has not been created');
        }else{
            writeFile();
            readFile();
        }
    })
}else{
    writeFile();
    readFile();

}
})
console.log('prgm ended');