function test1(f) {
    let result = f(3, 4);
    console.log(result);
  }
  
  test1((a, b) =>  a + b);
  test1((a, b) =>  a * b);
  