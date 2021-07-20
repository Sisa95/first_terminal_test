let assert = require("assert");///test failing
let countAllPaarl = require("../functions/countAllPaarl");

describe('countAllPaarl' , function(){
    it('Should return 3 from Paarl' , function(){
        var countPaarl = countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123');
        assert.equal(countPaarl,3 )
    });

    it('Should return 0 from Paarl if no match is found' , function(){
        var countPaarl = countAllPaarl('Ck 345 123, CC 2345, CL 123-546, CK 345, CL 123');
        assert.equal(countPaarl, 0 )
    });
});