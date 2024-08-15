const fs = require('fs');
const fileName = 'filess.txt';
fs.readFile(fileName, 'utf8', (err,data) => {
    if (err) {
        console.log(`Error in reading the file ${fileName}`, err);
    } else {
        console.log(`file data of ${fileName} is \n`, data);
    }
})