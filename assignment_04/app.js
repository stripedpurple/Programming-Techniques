var fs = require('fs');

fs.readFile("question1.txt", 'utf-8', function (err, text) {
    if (err){
        throw err;
    }
    console.log(text);
});
