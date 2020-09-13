class Box
{
  constructor(x, y, width, height, angle) 
  {
      var options = 
      {
        restitution : 0.7,
        friction : 0.6,
        isStatic : false,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      this.image = loadImage("box.png")
      World.add(world, this.body);
    }
      display(color)
      {
        if(this.body.speed < 3)
        {
          var pos =this.body.position;
          push()
          strokeWeight(3);
          translate(pos.x ,pos.y)
          rotate(this.body.angle)
          image(this.image, 0, 0, this.width, this.height);
          pop()
        }
        else
        {
          World.remove(world, this.body);
          push()
          tint(255,this.visibility);
          this.visibility = this.visibility - 5;
          image(this.image,this.body.position.x,this.body.position.y, 50,50);
          pop()
        }
    }

    score ()
    {
        if(this.visibility<255 && this.visibility>=-245)
        {
             score = score+1            
        }
    }
}
