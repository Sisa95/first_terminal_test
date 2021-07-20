module.exports = function transportFee(timeOfDay){
    var timeOfDay = timeOfDay.toLowerCase();
	if(timeOfDay === "morning")
      return "R20";
  	else if(timeOfDay === "afternoon")
      return "R10";
  	else if(timeOfDay === "nightshift")
      console.log("free")
      return "free";
}