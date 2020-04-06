let rectangle = { 
    width: 5, 
    height: 7
  };
  
  rectangle.area = function () {
    return this.width * this.height;
  }
  
  console.log(rectangle.area());
  