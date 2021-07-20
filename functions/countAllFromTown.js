module.exports = function countAllFromTown(regNo, loc){
    var town = regNo.split(',')
    var counter = 0;
    if(regNo == "" || loc == '')
    return 0
  
    for(var i = 0; i < town.length; i++){
      var trimStr = town[i].trim();
      if(trimStr.startsWith(loc)){
        counter++
      }
    }
    return counter;
  }