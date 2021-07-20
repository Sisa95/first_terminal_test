module.exports = function countAllPaarl(regNo){
    var reg = regNo.split(",");
    var counter = 0;
  
    for(var i = 0; i < reg.length; i++){
      var trimStr = reg[i].trim();
      if(trimStr.startsWith("CJ")){
        counter++;
      }
    }
    return counter++;
  }