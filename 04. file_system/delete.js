const fs = require('fs');

const fileName = "del.txt";

fs.unlink(fileName, (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("file deleted");
    }
});