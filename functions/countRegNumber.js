module.exports = function countRegNumber(str){
    if(str == '')
        return 0
	var input = str.split(",").length;
  	return input;
}