import {
    handlePad1KeyDown, 
    handlePad1KeyUp, 
    handlePad2KeyDown, 
    handlePad2KeyUp
} from './event.js';
import { game } from './game.js';

window.addEventListener('keypress', handlePad1KeyDown);
window.addEventListener('keypress', handlePad2KeyDown);
window.addEventListener('keyup', handlePad1KeyUp);
window.addEventListener('keyup', handlePad2KeyUp);

game.start();