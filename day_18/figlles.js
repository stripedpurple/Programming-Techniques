var fig = require('figlet')
fig.text("Hello", function(err, data){
	if (err){
		console.log(err);
	}else{
		console.log(data);
	}

});
