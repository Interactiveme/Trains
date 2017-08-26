FileLoader = require('./FileLoader')
Journey = require('../journey/Journey.js')

class JourneysLoader {

	load(file, routeData, callback){
		let me = this;
		me.callback = callback;
		me.routeData = routeData;
		new FileLoader(file).load(me.process.bind(me));
	}

	process(data){
		var me = this;
		let processedData = data.split(",");
		let journeyData = processedData.map(journey => new Journey(journey, me.routeData));

		if(me.callback){
			me.callback(journeyData);
		}
	}
}

module.exports = JourneysLoader