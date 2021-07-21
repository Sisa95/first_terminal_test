let assert = require("assert");
let totalPhoneBill = require("../functions/totalPhoneBill");
describe('totalPhoneBill' , function(){
    it('Should return R3.40 when you add call & sms total, R2.75 per call R0.65 per sms' , function(){
        assert.equal(totalPhoneBill('call, sms'),"R3.40");
    });

    it('Should return R0.00 if no argument is parsed' , function(){
        assert.equal(totalPhoneBill(''),"R0.00");
    });
});