class Pig {
    constructor(x,y,r) {
        var options = {
            restitution: 0.8
        }
        this.body = Bodies.circle(x,y,r, options);
        this.radius = r;
        World.add(myWorld, this.body);

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //boundary of something
        strokeWeight(2);
        stroke("black");
        ellipseMode(RADIUS);
        fill("green");
        ellipse(0, 0, this.radius,this.radius);
        pop();
    }
}