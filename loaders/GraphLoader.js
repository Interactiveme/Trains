Route = require('../journey/Route.js')
FileLoader = require('./FileLoader')

class GraphLoader{

	load(callback){
		let me = this;
		me.callback = callback;
		new FileLoader("data/data.txt").load(me.process.bind(me));
	}

	process(data){
		var me = this;
		let processedData = data.split(",");
		let routeData = processedData.map(route => new Route(route));

		if(me.callback){
			me.callback(routeData);
		}
	}
}

module.exports = GraphLoader;

