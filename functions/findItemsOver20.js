module.exports = function findItemsOver20(itemList){
    if(itemList == ""){
        return [];
    }
    var result = itemList.filter( itemList => itemList.qty > 20);
    console.log(result)
    return result
  }