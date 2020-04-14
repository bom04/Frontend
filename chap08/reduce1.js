function callback(a, b) { 
    console.log(a + ", " + b); 
    return a + b; 
  }
  
  let a1 = [10, 20, 30, 40, 50];
  let sum = a1.reduce(callback);
  console.log(sum);
  