import { Position, Velocity } from './component.js';
import { Ball } from './ball.js';
import { Player } from './Player.js';

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.player1 = new Player(new Position(500, 800));
        this.player2 = new Player(new Position(1200, 800));
        this.ball = new Ball(new Position(canvas.width / 2, canvas.height / 2), new Velocity(600, 100));
        this.lastTime = Date.now();
        this.deltaTime = 0;
    }

    start() {
        tick();
    }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

export const game = new Game(canvas, context);

function tick() {
    let currentTime = Date.now();
    game.deltaTime = (currentTime - game.lastTime) / 1000;
    game.lastTime = currentTime;

    game.context.fillStyle = "black";
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    game.player1.draw(game);
    game.player2.draw(game);
    game.ball.draw(game);

    game.player1.tick(game);
    game.player2.tick(game);
    game.ball.tick(game);

    requestAnimationFrame(tick);
}