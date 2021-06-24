class Paper{
    constructor(x, y,r){

      

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 1.2
        }
        this.image = loadImage("paper.png");

        this.body = Bodies.circle(x, y, r, options);
       this.r = r;
        

        World.add(world, this.body);
    }
    display(){
        var groundPos=this.body.position;		
        var angle = this.body.angle;
			push()
			translate(groundPos.x, groundPos.y);
            
			imageMode(CENTER)
			fill(128,128,128)
			image(this.image,0,0,this.r,this.r);
			pop()
    }
}