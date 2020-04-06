class Rectangle {
    constructor(x1, y1, x2, y2) {
      this.x1  = x1;
      this.y1  = y1;
      this.x2  = x2;
      this.y2  = y2;
    }
  
    getWidth() {
      return Math.abs(this.x2 - this.x1);
    }
  
    setWidth(width) {
      this.x2 = this.x1 + width;
    }
  
    getHeight() {
      return Math.abs(this.y2 - this.y1);
    }
  
    setHeight(height) {
      this.y2 = this.y1 + height;
    }
  }
  
  let rectangle = new Rectangle(5, 5, 20, 25);
  rectangle.setWidth(30);
  rectangle.setHeight(30);
  console.log(rectangle);
  console.log("%d %d", rectangle.getWidth(), rectangle.getHeight());
  