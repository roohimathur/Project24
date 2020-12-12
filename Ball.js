class Ball {
    constructor(x, y) {
      
        var options={
			isStatic:false,
			restitution:0.3,
			friction:1.0,
			density:1.8

			
			}
      this.body = Bodies.circle(x,y,20,options);
      //Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);    
      fill("red");
      ellipse(0, 0,20);

      pop();
    }
  };
  