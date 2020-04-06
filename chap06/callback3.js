function test1(f) {
    let result = f(3, 4);
    console.log(result);
  }
  
  test1(function(a, b) {
    return a + b;
  });
  
  test1(function(a, b) {
    return a * b;
  });
  