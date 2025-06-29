// Game initialization
let canvas, ctx, gameEngine, player;

// Dynamic imports for ES6 modules
async function initGame() {
  canvas = document.getElementById('gameCanvas');
  ctx = canvas.getContext('2d');
  
  const { default: GameEngine } = await import('./game/engine.js');
  const { default: Player } = await import('./game/player.js');
  
  gameEngine = new GameEngine(canvas, ctx);
  player = new Player();
  
  gameEngine.start(player);
  gameLoop();
}

function gameLoop() {
    if (gameEngine && player) {
        gameEngine.update();
        gameEngine.render();
    }
    requestAnimationFrame(gameLoop);
}

window.onload = () => {
    initGame();
};