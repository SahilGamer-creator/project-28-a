class Mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
            }
            
		this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        this.image=loadImage("pics/mango.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var mangopos=this.body.position;		

			push()
			translate(mangopos.x, mangopos.y);
			imageMode(CENTER)
			image(this.image,this.x,this.y,80,80);  
			pop()
			
	}

}