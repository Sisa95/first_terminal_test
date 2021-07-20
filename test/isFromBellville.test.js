let assert = require("assert");
let isFromBellville = require("../functions/isFromBellville");

describe('isFromBellville' , function(){
    it('should return true if registration starts with CY' , function(){
        assert.equal(isFromBellville('CY'),true);
    });

    it('should return fasle if registration does not start CY' , function(){
        assert.equal(isFromBellville('CA'),false);
    });
});
