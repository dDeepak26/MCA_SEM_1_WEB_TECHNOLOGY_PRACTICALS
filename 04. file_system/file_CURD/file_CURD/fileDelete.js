const fs = require('fs');
const dFile = 'fileRenamed.txt';

fs.unlink(dFile, (err) => {
    if (err) {
        console.log(`file can not delete` , err);
    } else {
        console.log(`file deleted ${dFile}`);
    }
});