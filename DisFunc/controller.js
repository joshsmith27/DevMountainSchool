var Themeparks = require('themeparks');

var disneyMagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();

var disneyEpcot = new Themeparks.Parks.WaltDisneyWorldEpcot();

var disneyAnimalKingdom = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();

var disneyHollyWoodStudios = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();


function convertToEsternStandard(time){
	var dt = new Date(time);
	dt.setTime(dt.getTime()+dt.getTimezoneOffset()*60*1000);
	var offset = -240;
	return new Date(dt.getTime() + offset*60*1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function getOpeningTime(park){
	park.GetOpeningTimes().then(function(times) {
		var OpenTimes = [];
		times.map(function(time){
			if (time.type == 'Operating') {
				OpenTimes.push(
					{
						date: time.date,
						open: convertToEsternStandard(time.openingTime),
						close: convertToEsternStandard(time.closingTime),
					});
			}
		});
		return OpenTimes;			
	});
}





module.exports = {
	getOpenTimesMagicKingdom: getOpeningTime(disneyMagicKingdom),
	getOpenTimesEpcot: getOpeningTime(disneyEpcot),		
	getOpenTimesHollywoodStudios: getOpeningTime(disneyHollyWoodStudios),
	getOpenTimesAnimalKingdom: getOpeningTime(disneyAnimalKingdom),
};