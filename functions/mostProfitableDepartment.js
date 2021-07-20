module.exports = function mostProfitableDepartment(salesData){
    let sales_Data =salesData;
    const salesMap = {};

    for(var i = 0; i < sales_Data.length; i++){
      var sales = sales_Data[i];
      salesMap[sales.department] = 0; 
    }
    for(var i = 0; i < sales_Data.length; i++){
        var sales = sales_Data[i];
        var currentTotal = salesMap[sales.department]; 

        currentTotal += sales.sales;
        salesMap[sales.department] = currentTotal;
    }
  
    var currentMax = 0;
    var currentDepartment = "";
    for(const saleDepartment in salesMap ){
        
        var currentSales = salesMap[saleDepartment];
        if(currentSales > currentMax){
            currentMax = currentSales
            currentDepartment = saleDepartment
        }    
    }
   return currentDepartment; 
}