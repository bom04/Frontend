class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(point1, point2) {
      let dx = point1.x - point2.x;
      let dy = point1.y - point2.y;
      return Math.hypot(dx, dy);
    }
  }
  
  let p1 = new Point(10, 15);
  let p2 = new Point(25, 40);
  
  console.log(Point.distance(p1, p2));
  