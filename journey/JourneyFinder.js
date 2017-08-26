class JourneyFinder{

	constructor(journeys){
		this.journeys = journeys;
	}

	loop(func){
		for(let index = 0; index < this.journeys.length; index++){
			let journey = this.journeys[index];
			func(journey);
		}
	}

	shortestJourneyDistance(start,end){
		let distance = 0;
		this.loop(function(journey){
			if(journey.journeyStops[0] == start && journey.journeyStops[journey.journeyStops.length-1] == end){
				let journeyDistance = journey.journeyCalculator.calculateTotalDistance();
				if(distance == 0 || journeyDistance < distance){
					distance = journeyDistance;
				}	
			}
		});
		
		return distance
	}

	lessThanStops(start,end,stops){
		let count = 0;
		this.loop(function(journey){
			if(journey.journeyStops[0] == start && journey.journeyStops[journey.journeyStops.length-1] == end){
				let journeyDistance = journey.journeyCalculator.calculateTotalDistance();
				if( journeyDistance < stops){
					count++;
				}	
			}
		});
		
		return count;
	} 

	maxStops(start,end,stops){
		let count = 0;
		this.loop(function(journey){
			if(journey.journeyStops.length <= stops +1){
				count ++;
			}
		});		
		return count;
	} 

	totalRouts(start,end,stops){
		let count = 0;
		this.loop(function(journey){
			if(journey.journeyStops.length == stops +1){
				if(journey.journeyStops[0] == start && journey.journeyStops[journey.journeyStops.length -1] == end){
					count ++;
				}
			}
		});	
		return count;	
	}
}

module.exports = JourneyFinder;