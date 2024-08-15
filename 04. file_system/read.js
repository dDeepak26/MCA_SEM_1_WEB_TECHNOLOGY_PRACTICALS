const { isUtf8 } = require('buffer');
const fs = require('fs');

const fileName = "text.txt";

fs.readFile(fileName, 'utf8', (err,data) => {
    if (err) {
        console.log("error in reading the file", err);
    }
    else {
        console.log("File data: ", data);
    }
});