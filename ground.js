class Ground{
    constructor(x,y){
        var options={
            isStatic: true

        }

        this.body=Bodies.rectangle(x,y,1000,30,options);
        this.width=1000;
        this.height=30;
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y);
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();
}
    
}