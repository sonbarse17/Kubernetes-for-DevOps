const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

import GameEngine from './game/engine.js';
import Player from './game/player.js';
import { randomNumber } from './game/utils.js';

const gameEngine = new GameEngine(canvas, ctx);
const player = new Player();

function gameLoop() {
    gameEngine.update();
    gameEngine.render();
    requestAnimationFrame(gameLoop);
}

window.onload = () => {
    gameEngine.start(player);
    gameLoop();
};