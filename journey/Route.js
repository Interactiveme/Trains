class Route{
	
	constructor(item){

		var data = item.split('');
		this.start = data[0];
		this.end = data[1];
		this.distance = data[2];
	}
}

module.exports = Route;