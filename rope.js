class Rope{
    constructor(bodyA, bodyB,offsetX){
       
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
           stiffness: 0.02,
            length: 20
        }
        
        this.offsetX=25
        World.add(world,this.offsetX)
        this.Rope = Matter.Constraint.create(options);
        World.add(world, this.Rope);
    }
 
    display(){
       var   bodyA = this.Rope.bodyA.position;
       var   bodyB= this.Rope.bodyB.position
      strokeWeight(4);
        line(bodyA.x, bodyA.y, bodyB.x+10,bodyB.y);
    }
}












