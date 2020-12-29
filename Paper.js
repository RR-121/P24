class CrumpledPaper {
    constructor(x, y, radius) {
        var options = {isStatic : false, restitution : 0.4, friction: 0.5, density : 1.2};
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        stroke("black");
        fill("white");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}