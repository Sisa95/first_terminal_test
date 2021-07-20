let assert = require("assert");
let isWeekday = require("../functions/isWeekday");

describe('isWeekday' , function(){
    it('should return true if function returns day of the week' , function(){
        assert.equal(isWeekday("Monday"),true);
    });

    it('should return false if function returns day of the weekend' , function(){
        assert.equal(isWeekday("Sunday"),false);
    });
});