module.exports = function findItemsOver(itemList, over){
    if(itemList == ""){
        return [];
    }
    var result = itemList.filter( itemList => itemList.qty > over);
    return result
  }