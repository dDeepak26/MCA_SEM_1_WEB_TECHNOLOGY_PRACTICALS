const fs = require('fs');
const oldFile = "file.txt";
const newFile = "fileRenamed.txt"

fs.writeFile(oldFile, "file renameds", (err) => {
    if (err) {
        console.log(`error in creating file ${oldFile}`, err);
    } else {
        console.log(`file created ${oldFile}`);
    }
});

fs.rename(oldFile, newFile, (err) => {
    if (err) {
        console.log(`error in renaming file ${oldFile}`, err);
    } else {
        console.log(`successfully renamed file ${oldFile} to ${newFile}`);
    }
});