let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");



let player = new Player(new Position(100,100));

player.draw();

let ball = new Ball(new Position(100, 500), 5, 30,)
ball.draw()