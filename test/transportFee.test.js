let assert = require("assert");
let transportFee = require("../functions/transportFee");

describe('transportFee' , function(){
    it('Should retun R20 if it\'s morning' , function(){
        assert.equal(transportFee('morning'),"R20");
    });

    it('Should return R10 if time of day is afternoon' , function(){
        assert.equal(transportFee('afternoon'),"R10");
    });

    it('Should return free if time of day is night shift' , function(){
        assert.equal(transportFee('nightshift'),"free");
    });
});