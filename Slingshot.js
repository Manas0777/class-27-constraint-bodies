class Slingshot {
constructor(bodyA,bodyB)
{
var options= {

        bodyA : bird.body,
        bodyB : log6.body,
        length : 10,
        stiffness : 0.04


    }

this.slingshot = Constraint.create(options);
World.add(world,this.slingshot);





}



display()
{
var pointA = this.slingshot.bodyA.position;
var pointB = this.slingshot.bodyB.position;
strokeWeight(3);
line (pointA.x,pointA.y,pointB.x,pointB.y)


}



}

