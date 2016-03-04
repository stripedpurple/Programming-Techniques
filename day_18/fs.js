var fs = require('fs');

fs.readFile("file.txt", function(err, buffer){
	if (err){
		throw err
	}
	console.log(buffer[0]);
});
