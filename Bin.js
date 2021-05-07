class Bin{
    constructor(x,y,width,height){
   
 var options={
    isStatic: true,
    restitution:0.3,
    friction:0.5,
    density:1.2

 }
 this.body=Bodies.rectangle(x,y,10,10,options);
 this.width=10;
 this.height=10;

 this.image=loadImage("dustbingreen.png");
 World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,50,5,90,90);
        pop();
    }
}