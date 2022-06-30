// Calculator

const add = function(x , y) {
    let sum = x + y
    return sum
  
  };
  
  const subtract = function( x , y) {
      let sum = x - y
    return sum
  };
  
  const sum = function( array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
  const multiply = function(array) {
    return array.reduce((total, current) => total * current, 1);
  
  };
  
  const power = function(x , y) {
    return x**y
      
  };
  
  const factorial = function(n) {
      var f = [];
    if (n == 0 || n == 1)
      return 1;
    if (f[n] > 0)
      return f[n];
    return f[n] = factorial(n-1) * n;
  };

  function operate ( x , y){
    add (x , y)
  }
