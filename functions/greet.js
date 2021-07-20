module.exports = function greet(name){
    if(name == ""){
      return 'Expecting person name';
    }
    return "Hello, " + name;
  }