export class Line {
    constructor(position) {
        this.position = position;
        this.width = 10;
        this.height = 100;
    }

    draw(game) {
        game.context.fillStyle = 'white';
        game.context.fillRect(
            this.position.x - this.width / 2,
            this.position.y - this.height / 2,
            this.width,
            this.height
        );
    }
}