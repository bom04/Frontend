function test1(f) {
    let result = f(3, 4);
    console.log(result);
  }
  
  let add = (a, b) => {
    return a + b;
  }
  
  let multiply = (a, b) => {
    return a * b;
  }
  
  test1(add);
  test1(multiply);
  