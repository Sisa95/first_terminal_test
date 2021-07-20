let assert = require("assert");
let findItemsOver = require("../functions/findItemsOver");

describe('findItemsOver' , function(){
    it('Should return items over 25' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3}
        ], 25), [{name:"pears",qty:37},{name:"bananas",qty:27}])
    });
    
    it('Should return empty array if no items are parsed' , function(){
        assert.deepEqual([],
        findItemsOver([
            {name : 'apples', qty : 50},
            {name : 'pears', qty : 27},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3}
        ]))
    });
   
    
});