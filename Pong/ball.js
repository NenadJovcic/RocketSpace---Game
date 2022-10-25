import { Position, Velocity } from './component.js';

export class Ball {
    constructor(position, velocity) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 20;
        this.color = "white";
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = this.color;
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.fill();
    }

    tick(game) {
        this.position.x += this.velocity.dx * game.deltaTime;
        this.position.y += this.velocity.dy * game.deltaTime;

        if (this.position.y > game.canvas.height - this.radius || this.position.y < this.radius) {
            this.velocity.dy *= -1;
        }

        if (ballPadCollision(this, game.player1) || ballPadCollision(this, game.player2)) {
            this.velocity.dx *= -1;
        }

        if (isOutsideLeft(this)) {
            game.ball = new Ball(new Position(game.canvas.width / 2, game.canvas.height / 2), new Velocity(-600, -100))
        } else if (isOutsideRight(this)) {
            game.ball = new Ball(new Position(game.canvas.width / 2, game.canvas.height / 2), new Velocity(600, 100))
        }
    }
}

function isOutsideLeft(ball) {
    return ball.position.x < 0;
}

function isOutsideRight(ball) {
    return ball.position.x > canvas.width;
}

function ballPadCollision(ball, pad) {
    let cdx = Math.abs(ball.position.x - pad.position.x);
    let cdy = Math.abs(ball.position.y - pad.position.y);

    if (cdx > (pad.width / 2 + ball.radius)) { return false; }
    if (cdy > (pad.height / 2 + ball.radius)) { return false; }

    if (cdx <= pad.width / 2) { return true; }
    if (cdy <= pad.height / 2) { return true; }

    let distSquared = ((cdx - pad.width / 2) ** 2) + ((cdy - pad.height / 2) ** 2);
    return distSquared <= ball.radius ** 2;
}