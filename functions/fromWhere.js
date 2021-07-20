module.exports = function fromWhere(regNumber){
    var regNumber = regNumber.toUpperCase();
    switch(regNumber){
    case "CY":
        return "Bellville";
    break;
    case "CJ":
        return "Paarl";
    break;
    case "CA":
        return "Cape Town";
    break;
    default:
        return "Some other place!";
    }
}
