class Box {
    constructor(x,y,w,h) {
        var options = {
            restitution: 0.4,
            friction: 1.0
        }
        this.body = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("sprite/wood1.png");

        World.add(myWorld, this.body);

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("brown");

        image(this.image, 0,0, this.width,this.height);
        pop();
    }
}