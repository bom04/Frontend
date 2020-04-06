let rectangle = { 
    width: 5, 
    height: 7, 
    area : function() { return this.width * this.height; }
  };
  
  for (let key in rectangle) {
    let value = rectangle[key];
    console.log("%s: %s", key, value);
  }
  