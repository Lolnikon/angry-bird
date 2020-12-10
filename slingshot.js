class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 15,
            stiffness:0.05
          }
        //this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(myWorld, this.rope);
    }

    display() {
        var locA =  this.rope.bodyA.position;
        var locB = this.rope.pointB;
        stroke("black");
        strokeWeight(2)
        line(locB.x, locB.y, locA.x, locA.y)
    }
}