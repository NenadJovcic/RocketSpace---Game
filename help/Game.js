import { Position, Velocity } from './Component.js';
import { Ball, generateRandomPosition1, } from './Ball.js';
import { Player } from './Player.js';
import { Line } from './line.js';


class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.intialPosPlayer1 = {x: canvas.width*0.25 ,y: canvas.height}
        this.intialPosPlayer2 = {x: canvas.width*0.75 ,y: canvas.height}
        this.player1 = new Player(new Position(canvas.width*0.25 , canvas.height));
        this.player2 = new Player(new Position(canvas.width*0.75 , canvas.height));
        this.lastTime = Date.now();
        this.deltaTime = 0;
        let half = canvas.width / 2;
        let count = Math.floor(canvas.height / 100) - 1;
        let margin = 100 / count;
        this.middleLines = [];
        this.points1 = 0;
        this.points2 = 0;

        for (let i = 0; i < count; i++) {
            let y = 100 * i + (margin * i) + 50 + (margin / 2);
            this.middleLines.push(new Line(new Position(half, y)));
        }
    }

    start() {
        tick();
    }

    calculatePoints() {
        if (this.player1.position.y <= this.player1.height / 2) {
            this.player1.position.y = canvas.height
            this.points1++
            
        }
        if (this.player2.position.y <= this.player1.height / 2) {
            this.player2.position.y = canvas.height
            this.points2++
        }
    }

    drawPoints() {
        this.context.fillStyle = 'white';
        this.context.font = '48px serif';
        this.context.textAlign = 'center';
        this.context.fillText(this.points1, (this.canvas.width / 2) - 100, 70);

        this.context.fillStyle = 'white';
        this.context.font = '48px serif';
        this.context.textAlign = 'center';
        this.context.fillText(this.points2, (this.canvas.width / 2) + 100, 70);
    }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

export const game = new Game(canvas, context);

export let balls = []
let frameCount = 0;
function tick() {

    let currentTime = Date.now();
    game.deltaTime = (currentTime - game.lastTime) / 1000;
    game.lastTime = currentTime;

    frameCount++
    

    if (frameCount == 100) {        
         balls.push(new Ball(new Position(0, generateRandomPosition1()), new Velocity(200, 0), "white"))
         balls.push(new Ball(new Position(canvas.width - 50, generateRandomPosition1()), new Velocity(-200, 0), "white" ))
        frameCount = 0;
    }
    

    game.context.fillStyle = 'black';
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    for (let i = 0; i < game.middleLines.length; i++) {
        let line = game.middleLines[i];
        line.draw(game);
    }
    game.drawPoints();

    
    game.player1.draw(game);
    game.player2.draw(game);


    for(let i = 0; i < balls.length; i++){
        let ball = balls[i]
        ball.draw(game)
        ball.move(game);
        
    }
    game.player1.tick(game);
    game.player2.tick(game);
    game.calculatePoints();
    

    requestAnimationFrame(tick);
}






