JourneyCalculator = require('./JourneyCalculator.js')

class Journey{

	constructor(journeyString, routeData){
		this.journeyCalculator = new JourneyCalculator(this);
		this.routes = [];
		this.routeData = routeData;
		this.journeyString = journeyString;
		this.journeyStops = this.journeyString.replace(/[^0-9a-z]/gi, '').split("");
		this.initRoutes();
	}

	initRoutes(){
		var index = 0;
		for(index = 0; index < this.journeyStops.length; index++){
			let start = this.journeyStops[index];
			let stop = this.journeyStops[index+1];

			let route = this.routeData.filter(r => r.start == start && r.end == stop)[0];
			if(route){
				this.routes.push(route);
			}
		}

	}
}

module.exports = Journey;