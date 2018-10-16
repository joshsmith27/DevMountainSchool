'use strict';

var controller = require('./disney-controller');

var Alexa = require('alexa-sdk');

var handlers = {
	'OpeningTimesAnimalKingdom': function () { 
		var openingTimes = controller.getOpenTimesAnimalKingdom();
		this.response.speak('Animal Kingdom Opened today at ' +  openingTimes[0].open + 'and will close at ' + openingTimes[0].close + ' tonight');
		this.emit(':responseReady'); 
	},
	'OpeningTimesEpcot': function () {
		var openingTimes = controller.getOpenTimesEpcot();		
		this.response.speak('Epcot Opened today at ' +  openingTimes[0].open + 'and will close at ' + openingTimes[0].close + ' tonight');
		this.emit(':responseReady');   

	},
	'OpeningTimesHollywoodStudios': function () {
		var openingTimes = controller.getOpenTimesHollywoodStudios();
		this.response.speak('Hollywood Studios Opened today at ' +  openingTimes[0].open + 'and will close at ' + openingTimes[0].close + ' tonight');
		this.emit(':responseReady');   

	},
	'OpeningTimesMagicKingdom': function () {
		var openingTimes = controller.getOpenTimesMagicKingdom();
		this.response.speak('Magic Kingdom Opened today at ' +  openingTimes[0].open + 'and will close at ' + openingTimes[0].close + ' tonight');
		this.emit(':responseReady');   
	},
	//Our skill will receive a LaunchRequest when the user invokes the skill with the invocation name, but does not provide any command mapping to an intent. For example, "Open code academy"
	'LaunchRequest': function () {
		this.response.speak('Welcome to DisneyWorld, Right now all I can do is tell you the opening and closing times for each park. '); 
		this.emit(':responseReady');
	}

};


// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {

	var alexa = Alexa.handler(event, context);

  
	alexa.registerHandlers(handlers);
  

	alexa.execute();
  
};

