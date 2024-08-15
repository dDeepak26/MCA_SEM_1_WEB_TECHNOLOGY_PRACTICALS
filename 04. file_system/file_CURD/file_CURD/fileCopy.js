//Deepak Durgam - 06
const fs = require('fs');
const fileName = 'file.txt'; //already created
const copyFile = 'newFile.txt'; // to create

fs.writeFile(copyFile, "okok", (err) => {
    if (err) {
        console.log(`Error to create ${copyFile}:`, err);
    } else {
        console.log(`Successfully created file ${copyFile}`);
    }
});

fs.copyFile(fileName, copyFile, (err) => {
    if (err) {
        console.log(`error in copy file ${fileName}`, err);
    } else {
        console.log(`file copied ${fileName} to ${copyFile}`);
    }
});

fs.readFile(copyFile, 'utf8', (err,data) => {
    if (err) {
        console.log(`Error in reading the file ${copyFile}`, err);
    } else {
        console.log(`file data of ${copyFile} is \n`, data);
    }
});

