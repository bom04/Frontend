class Figure {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    move(dx, dy) {
      this.x += dx;
      this.y += dy;
    }
  }
  
  class Rectangle extends Figure {
    constructor(x1, y1, x2, y2) {
      super(x1, y1);
      this.x2 = x2;
      this.y2 = y2;
    }
  
    move(dx, dy) {
      super.move(dx, dy);
      this.x2 += dx;
      this.y2 += dy;
    }
  }
  
  let rect = new Rectangle(10, 10, 20, 25);
  rect.move(5, 10);
  console.log(rect);
  