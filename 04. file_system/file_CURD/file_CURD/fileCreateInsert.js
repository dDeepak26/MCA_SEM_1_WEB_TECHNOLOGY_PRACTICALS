const fs = require('fs');

const fileName = 'example.txt';
const fileContent = 'This is some content in the file example.txt made on 26/10/2023';

fs.writeFile(fileName, fileContent, (err) => {
    if(err) {
        console.log(`Error writing to ${fileName}:`, err);
    }
    else {
        console.log(`Successfully wrote to ${fileName}`);
    }
});

