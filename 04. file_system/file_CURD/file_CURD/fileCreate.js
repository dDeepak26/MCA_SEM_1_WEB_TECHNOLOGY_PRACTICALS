const fs = require('fs');
const fileName = 'file.txt';
const fileContent = 'This is some content created by fileCreate.js file Deepak Durgam';
//create file
fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
        console.log(`Error to create ${fileName}:`, err);
    } else {
        console.log(`Successfully created file ${fileName}`);
    }
});