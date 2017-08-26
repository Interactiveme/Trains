GraphLoader = require('./loaders/GraphLoader.js');
JourneysLoader = require('./loaders/JourneysLoader.js');
JourneyFinder = require('./journey/JourneyFinder.js');

class Application{

	constructor(){
		new GraphLoader().load(this.loadJourneys.bind(this));	
	}

	loadJourneys(data){
		new JourneysLoader().load("data/journeysOne.txt", data, this.processJourneysOne.bind(this));
		new JourneysLoader().load("data/journeysTwo.txt", data, this.processJourneysTwo.bind(this));
	}

	processJourneysOne(journeys){
		for(let index = 0; index < journeys.length; index++){
			console.log(journeys[index].journeyCalculator.calculateTotalDistance());
		}
	}

	processJourneysTwo(journeys){
		let journeyFinder = new JourneyFinder(journeys);

		console.log(journeyFinder.maxStops("C","C",3));
		console.log(journeyFinder.totalRouts("A","C",4)); 
		console.log(journeyFinder.shortestJourneyDistance("A","C"));
		console.log(journeyFinder.shortestJourneyDistance("B","B"));
		console.log(journeyFinder.lessThanStops("C","C",30)); 
	}
}

let app = new Application();