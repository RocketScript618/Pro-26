class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}
	vForce()
	{
		Matter.Body.applyForce(this.body,{x:0,y:0},{x:-10,y:0})
	}
}

