import { game } from './game.js'

export function handlePad1KeyDown(event) {
    if (event.repeat) return;

    if (event.key == 'w') {
        game.player1.up = true;
    } else if (event.key == 's') {
        game.player1.down = true;
    }
}

export function handlePad2KeyDown(event) {
    if (event.repeat) return;

    if (event.key == 'o') {
        game.player2.up = true;
    } else if (event.key == 'l') {
        game.player2.down = true;
    }
}

export function handlePad1KeyUp(event) {
    if (event.key == 'w') {
        game.player1.up = false;
    } else if (event.key == 's') {
        game.player1.down = false;
    }
}

export function handlePad2KeyUp(event) {
    if (event.key == 'o') {
        game.player2.up = false;
    } else if (event.key == 'l') {
        game.player2.down = false;
    }
}