const fs = require('fs');

const fileName = "text.txt"
const newContent = "\n This is some new content";

fs.appendFile(fileName, newContent, (err) => {
    if (err) {
        console.log("Error in updating file", err);
    }
    else {
        console.log("file updated");
    }
});