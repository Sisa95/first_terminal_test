let assert = require("assert");
let fromWhere = require("../functions/fromWhere");

describe('fromWhere', function () {
    it('Should Bellville if CY is parsed', function () {
        assert.equal(fromWhere('CY'), "Bellville");
    });

    it('Should Paarl if CJ is parsed', function () {
        assert.equal(fromWhere('CJ'), "Paarl");
    });

    it('Should Cape Town if CA is parsed', function () {
        assert.equal(fromWhere('CA'), "Cape Town");
    });

    it('Should return some where else ', function () {
        assert.notEqual(fromWhere('EC'), "Somewhere else");
    });
});