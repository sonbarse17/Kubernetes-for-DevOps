// Modern Game Initialization
class GameApp {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.gameEngine = null;
        this.isRunning = false;
        this.lastTime = 0;
    }

    async init() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Enable high DPI support
        this.setupHighDPI();
        
        // Dynamic imports
        const { default: GameEngine } = await import('./game/engine.js');
        
        this.gameEngine = new GameEngine(this.canvas, this.ctx);
        this.setupControls();
        this.gameEngine.start();
        
        this.isRunning = true;
        this.gameLoop();
    }

    setupHighDPI() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
    }

    setupControls() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                this.gameEngine.handleInput('jump');
            }
            if (e.code === 'KeyP') {
                this.gameEngine.togglePause();
            }
        });

        // Button controls
        document.getElementById('jumpBtn').addEventListener('click', () => {
            this.gameEngine.handleInput('jump');
        });
        
        document.getElementById('pauseBtn').addEventListener('click', () => {
            this.gameEngine.togglePause();
        });
        
        document.getElementById('restartBtn').addEventListener('click', () => {
            this.gameEngine.restart();
        });
        
        document.getElementById('soundBtn').addEventListener('click', () => {
            const enabled = this.gameEngine.toggleSound();
            document.getElementById('soundBtn').textContent = enabled ? '🔊 SOUND' : '🔇 MUTED';
        });

        // Touch controls for mobile
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.gameEngine.handleInput('jump');
        });
    }

    gameLoop(currentTime = 0) {
        if (!this.isRunning) return;
        
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        
        if (this.gameEngine) {
            this.gameEngine.update(deltaTime);
            this.gameEngine.render();
        }
        
        requestAnimationFrame((time) => this.gameLoop(time));
    }

    stop() {
        this.isRunning = false;
    }
}

// Initialize game when DOM is loaded
const gameApp = new GameApp();

window.addEventListener('DOMContentLoaded', () => {
    gameApp.init().catch(console.error);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden && gameApp.gameEngine) {
        gameApp.gameEngine.pause();
    }
});

export default gameApp;