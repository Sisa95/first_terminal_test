module.exports = function yearsAgo(year){
 
    var results = new Date().getFullYear() - new Date(year);
      console.log(results);
    return results
}