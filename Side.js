class Side{
  constructor(x,y,width,height){
      var option = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
  }
  display(){

    var pos=this.body.position;		

			push();
      translate(pos.x, pos.y);
      rotate(this.body.angle); 
    rectMode(CENTER);

    fill("yellow");
    stroke("yellow");
    rect(0, 0, this.width, this.height);
    pop();
   }
}
