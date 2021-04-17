class Stone{
	constructor(x,y,width,height)
	{
		var options ={
			'restitution':0.8,
			'friction':0.9,
			'density':12
		}
		this.x=x;
		this.y=y;
		this.height=height
		this.width=width
		this.body=Bodies.rectangle(this.x, this.y,this.height,this.width, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			rect(0,0,this.width,this.height);
			pop()
	}

}