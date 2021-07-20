let assert = require("assert");
let countAllFromTown = require("../functions/countAllFromTown");

describe('countAllFromTown' , function(){
      it('Expect 3 if the registration starts with CL' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellies, 3)
    });

    it('Expected return of 0 if registration number does not start with CL' , function(){
        var fromStellies = countAllFromTown('CJ 456','CL');
        assert.deepEqual(fromStellies, 0)
    });
});