class Ball {
    constructor(x, y, radius) {
      var options = {
          'frictionAir':0.005,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, radius, radius, options);
      this.width = radius;
      this.height = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill("blue");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }