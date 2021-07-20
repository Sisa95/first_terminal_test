let assert = require("assert");
let regCheck = require("../functions/regCheck");

describe('regCheck' , function(){
    it('should return true if the registration string matches with the province ' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });

    it('should return false if the province does not match the one the number plate', function(){
        assert.equal(regCheck('DV 23 NB GP', 'MP'),false);
    });
});