import {
    handlePlayer1KeyDown,
    handlePlayer1KeyUp,
    handlePlayer2KeyDown,
    handlePlayer2KeyUp
} from './spelEvent.js';
import { game } from './spelGame.js';


window.addEventListener('keypress', handlePlayer1KeyDown);
window.addEventListener('keypress', handlePlayer2KeyDown);
window.addEventListener('keyup', handlePlayer1KeyUp);
window.addEventListener('keyup', handlePlayer2KeyUp);

game.start();
