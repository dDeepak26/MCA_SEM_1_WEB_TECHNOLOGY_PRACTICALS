const fs = require('fs');

const fileName = "text.txt";
const fileContent = "Some text written by DD";

fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
        console.log("Error in creating file",err);
    }
    else {
        console.log("File created");
    }
});