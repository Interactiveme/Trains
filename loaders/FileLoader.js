fs = require('fs');

class FileLoader {
	
	constructor(fileName){
		this.fileName = fileName;
	}

	load(callback){
		let me = this;
		let file = this.fileName;
		
		fs.readFile(file, 'utf8', function (err,data) {
		  	if (err) {
		    	return console.log(err);
		  	}
			callback(data);
		});

	}
}

module.exports = FileLoader;
