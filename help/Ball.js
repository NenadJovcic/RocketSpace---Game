

export class Ball {
  constructor(position, velocity, color) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 15;
    this.color = color;
  }

  draw(game) {
    game.context.beginPath();
    game.context.fillStyle = this.color;
    game.context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2
    );
    game.context.fill();
  }

  move(game) {
    this.position.x += this.velocity.dx * game.deltaTime;

    if (ballPlayerCollision(this, game.player1)) {
      game.player1.position.y = canvas.height;
    }
    if (ballPlayerCollision(this, game.player2)) {
      game.player2.position.y = canvas.height;
    }
  }
}

export function ballPlayerCollision(ball, pad) {
  let cdx = Math.abs(ball.position.x - pad.position.x);
  let cdy = Math.abs(ball.position.y - pad.position.y);

  if (cdx > pad.width / 2 + ball.radius) {
    return false;
  }

  if (cdy > pad.height / 2 + ball.radius) {
    return false;
  }

  if (cdx <= pad.width / 2) {
    return true;
  }
  if (cdy <= pad.height / 2) {
    return true;
  }

  let distSquared = (cdx - pad.width / 2) ** 2 + (cdy - pad.height / 2) ** 2;
  return distSquared <= ball.radius ** 2;
}

export function generateRandomPosition1() {
  return Math.floor(Math.random() * 700) + 25;
}

export function generateRandomVelocity1() {
  return Math.floor(Math.random() * 50) + 30;
}
