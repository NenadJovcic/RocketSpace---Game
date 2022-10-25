
 class Position {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}
class Entity {
    constructor(position) {
        this.position = position;
    }

    tick() {};

    draw() {};
}

class Player extends Entity {
    constructor(position, velocity ) {
        super(position)
        this.velocity = velocity;
        this.width = 50;
        this.height = 100;

    }
    
    draw() {
        context.fillStyle = "red";
        context.fillRect(this.position.x, this.position.y, 50, 100)
    }
}

class Ball extends Entity {
    constructor(position, velocity, radius) {
        super(position)
        this.velocity = velocity;
        this.radius = radius;

    }

    tick() {

    }

    draw() {
        context.beginPath();
        context.fillStyle = "yellow";
        context.arc(this.position.x,this.position.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    } 
}

