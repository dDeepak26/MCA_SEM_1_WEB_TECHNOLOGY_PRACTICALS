const fs = require('fs');
const fileName = 'file.txt';
const newContent = "\n This is some new content inserted in file.txt by the appendFile function";
fs.appendFile(fileName, newContent, (err) => {
    if (err) {
        console.log(`Error in adding new content into the file ${file.txt}`, err);
    } else {
        console.log(`new content added succesfully in ${fileName}`);
    }
});