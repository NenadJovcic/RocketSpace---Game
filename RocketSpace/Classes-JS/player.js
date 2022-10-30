export class Player {
    constructor(position, ) {
        this.position = position;
        this.width = 50;
        this.height = 85;
        this.color = "black";
        this.up = false;
        this.down = false;
        const image = new Image()
        image.src = "/RocketSpace/Style-Related/rocket-19662.png"
        this.image = image

        
    }
    draw(game) {
        game.context.fillStyle = this.color;
        game.context.fillRect(
            this.position.x - this.width / 2,
            this.position.y - this.height / 2,
            this.width,
            this.height
        );
        game.context.drawImage(this.image, this.position.x -70, this.position.y - 58, 140, 140)
    }

    tick(game) {
        if (this.up) {
            this.position.y -= 400 * game.deltaTime;
        } else if (this.down) {
            this.position.y += 400 * game.deltaTime;
        }

        if (this.position.y < this.height / 2) {
            this.position.y = this.height / 2;
        } else if (this.position.y > game.canvas.height - (this.height / 2)) {
            this.position.y = game.canvas.height - (this.height / 2);

        }
        if (game.player1.position.y == 100) {
            game.points1++;
            
          } else if (game.player2.position.y == 0) {
            game.points2++;
          }

    }
    
}

