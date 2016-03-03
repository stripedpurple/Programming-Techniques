var fs = require("fs");

fs.readFile("file.txt", function (err, buffer) {
    if (err){
        throw err
    }

    console.log(buffer[0]); // first char as ascii
    console.log(buffer.length); // length of buffer array (i.e.number of chars)
    console.log(buffer); // Buffer as HEX
});

fs.writeFile("newFile.txt", "Goodbye world!!!", function (err) {
    if (err){
        console.log(err);
    }else{
        console.log("File Successfully Write")
    }
});
