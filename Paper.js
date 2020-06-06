class Paper{
   constructor(x,y,radiusX,radiusY){
    var options = {
      isStatic:false,
      restitution:0.3,
			friction:0.5,
			density:1.2
    }
    this.x = x;
     this.y = y;
     this.radiusX = radiusX;
     this.body = Bodies.circle(this.x,this.y,this.radiusX/2,options);
     
    // this.radiusY = radiusY;

     World.add(world,this.body)

     }
    display(){

      var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
		//	fill(255,0,255)
			//ellipse(0,0,this.r, this.r);
			
    fill(255,0,255);
    ellipse(0,0,this.radiusX,this.radiusX);
    pop()
    }
}