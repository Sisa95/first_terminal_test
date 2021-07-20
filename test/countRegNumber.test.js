let assert = require("assert");
let countRegNumber = require("../functions/countRegNumber");

describe('countRegNumber' , function(){

    it('Expected registration number to be 0' , function(){
        var regCount = countRegNumber('');
        assert.equal(regCount,0)
    });

    it('Expected registration number to be equal to 1' , function(){
        var regCount = countRegNumber('CA 182736');
        assert.equal(regCount,1 )
    });

    it('Expected registration number to equal 2' , function(){
        var regCount = countRegNumber('CA 182736, CY 523519');
        assert.equal(regCount,2)
    });
});