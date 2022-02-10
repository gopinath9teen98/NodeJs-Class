const validator=require('validator')

//check whether its valid mail id or not
const isValid=validator.isEmail('foo@bar.com');
console.log('is this valid mail id: ' +isValid);

//check whether its in lowercase or not 
const isLowercase=validator.isLowercase('agg')
console.log('is this lowercase: ' +isLowercase);

//check whether its ethereum address or not
const isEth=validator.isEthereumAddress('0x6a8963efb555e01f68a3b6c58ef353a27dfa7a2f')
console.log('is this eth address :' +isEth);

//check whether its correct date format or not (format is a string and defaults to YYYY/MM/DD)
const isCorrectDate=validator.isDate('2020-08-08')
console.log('is this correct format or not :' +isCorrectDate);