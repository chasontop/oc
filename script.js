String.prototype.insert = function(index, string) {
    if (index > 0) {
      return this.substring(0, index) + string + this.substr(index);
    }
  
    return string + this;
  };
  

function processNumber (number){
    for (let i = 0; i > number.length; i++){
        if (i % 3){
            something = number.insert(i, " ,");
            console.log(something)
        }
        else {
            pass
        }
    }
}