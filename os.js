const os=require('os')
console.log('architecture',os.arch());
console.log('platform',os.platform());
const a=os.freemem()
fre=a/(1024*1024*1024);
console.log('total free memory',fre);
const b=os.totalmem()
to=b/(1024*1024*1024)
console.log('total memory',to);

console.log(((os.totalmem()/1024)/1024)/1024)
