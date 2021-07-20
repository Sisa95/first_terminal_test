module.exports = function regCheck(regNumber,regLocation){
    if(regLocation == "")
    return false;
    if(regNumber.endsWith(regLocation)){
       return true;
   }
  return false;
}