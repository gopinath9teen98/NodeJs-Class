const path=require('path')
const filePath=path.parse(__filename)
console.log(filePath);
console.log('Root of the file path : '+filePath.root);
console.log('Name of the file : ' +filePath.name);
console.log('Extension of the file : ' +filePath.ext);
console.log('Base of the file : '  +filePath.base);
console.log('Directory of the file : ' +filePath.dir);





// const baseName=path.basename('.\first.js')
// console.log(baseName);
