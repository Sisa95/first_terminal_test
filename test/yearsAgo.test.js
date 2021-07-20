let assert = require("assert");
let yearsAgo = require("../functions/yearsAgo");

describe('yearsAgo' , function(){
    it('should return value of 1 if current year - 2020' , function(){
        assert.equal(yearsAgo(2020), 1);
    });

    it('should return not year if year value is above current year' , function(){
        assert.isBelow(yearsAgo(2022), 0);
    });
});