const fs = require('fs')

console.log('program started');

try{
    const data= fs.readFileSync('./view/view.txt');
    console.log(data.toString());

    fs.appendFile("./view/view.txt", ' (appended content)' , (err) => {
        if (err) {
          console.log(err);
        }
        else {
          console.log(fs.readFileSync("./view/view.txt", "utf8"));
        }
      })
      fs.rename('./view/view.txt', './view/Renamedview.txt', () => {
        console.log("\nFile Renamed!\n  ");
      })


}
catch{
    // console.log(error);
console.log('Error has been caught');
}
console.log('program ended');