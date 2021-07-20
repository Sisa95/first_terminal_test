let assert = require("assert");
let findItemsOver20 = require("../functions/findItemsOver20");

describe('findItemsOver20' , function(){
    it('Should return item over 20' , function(){
        assert.deepEqual([{name:"pears",qty:37},{name:"bananas",qty:27}],
        findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3}
        ]))
    });

    it('Should return empty array if no items are over 20' , function(){
        assert.deepEqual([],
        findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 07},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3}
        ]))
    });
});