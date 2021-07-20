module.exports = function isWeekday(days){
    var week = ["Monday", "Tuesday", "Wednesday", "Thursday", 
                "Friday"];
    if(week.includes(days)){
        return true;
    } else {
        return false;
    }
}