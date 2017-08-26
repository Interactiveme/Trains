class JourneyCalculator{
	
	constructor(journey){
		this.journey = journey;
	}

	calculateTotalDistance(){
		var distance = 0;
		if(this.journey.routes.length !== this.journey.journeyStops.length -1){
			return "NO SUCH ROUTE";
		}else{
			let index = 0;
			for(index = 0; index < this.journey.routes.length; index++){
				let route = this.journey.routes[index];
				if(route){
					distance += Number(route.distance);
				}
			}
		}
		return distance;

	}

}

module.exports = JourneyCalculator;