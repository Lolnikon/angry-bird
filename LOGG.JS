class Log {
    constructor(x,y,w) {
        var options = {
            restitution: 0.4
        }
        this.body = Bodies.rectangle(x,y,w,20, options);
        this.width = w;
        this.height = 20;
        World.add(myWorld, this.body);

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        strokeWeight(1);
        stroke("black");
        rotate(angle);
        rectMode(CENTER);
        fill("#5c3803");
        rect(0, 0, this.width,this.height);
        pop();
    }

 }