import Player from './player.js';
import { Particle, ParticleSystem } from './particles.js';
import { AudioManager } from './audio.js';
import { GameStorage } from './storage.js';

export default class GameEngine {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = null;
        this.obstacles = [];
        this.powerUps = [];
        this.particles = new ParticleSystem();
        
        // Game state
        this.score = 0;
        this.lives = 3;
        this.gameSpeed = 3;
        this.baseSpeed = 3;
        this.isRunning = false;
        this.isPaused = false;
        this.gameState = 'menu'; // menu, playing, paused, gameOver
        
        // Timing
        this.obstacleTimer = 0;
        this.powerUpTimer = 0;
        this.speedIncreaseTimer = 0;
        
        // UI elements
        this.scoreElement = document.getElementById('scoreValue');
        this.livesElement = document.getElementById('livesValue');
        this.highScoreElement = document.getElementById('highScoreValue');
        
        // Audio and storage
        this.audio = new AudioManager();
        this.storage = new GameStorage();
        this.gameData = this.storage.load();
        this.coinsCollected = 0;
        this.showNewHighScore = false;
        
        // Background
        this.backgroundOffset = 0;
        
        this.canvas.width = 800;
        this.canvas.height = 400;
    }

    start() {
        this.player = new Player(100, this.canvas.height - 100);
        this.isRunning = true;
        this.gameState = 'playing';
        this.reset();
    }

    reset() {
        this.score = 0;
        this.lives = 3;
        this.gameSpeed = this.baseSpeed;
        this.obstacles = [];
        this.powerUps = [];
        this.particles.clear();
        this.obstacleTimer = 0;
        this.powerUpTimer = 0;
        this.speedIncreaseTimer = 0;
        this.updateUI();
        
        if (this.player) {
            this.player.reset();
        }
    }

    handleInput(action) {
        if (action === 'jump' && this.gameState === 'playing' && !this.isPaused) {
            if (this.player?.jump()) {
                this.audio.play('jump');
            }
        }
    }

    togglePause() {
        if (this.gameState === 'playing') {
            this.isPaused = !this.isPaused;
            document.getElementById('pauseBtn').textContent = this.isPaused ? '▶️ RESUME' : '⏸️ PAUSE';
        }
    }

    pause() {
        this.isPaused = true;
    }

    restart() {
        this.gameState = 'playing';
        this.isPaused = false;
        this.showNewHighScore = false;
        this.reset();
        document.getElementById('pauseBtn').textContent = '⏸️ PAUSE';
    }
    
    toggleSound() {
        const enabled = this.audio.toggle();
        this.storage.updateSettings({ soundEnabled: enabled });
        return enabled;
    }

    update(deltaTime) {
        if (!this.isRunning || this.isPaused || this.gameState !== 'playing') return;

        const dt = Math.min(deltaTime / 16.67, 2); // Cap delta time
        
        this.player.update(dt);
        this.updateObstacles(dt);
        this.updatePowerUps(dt);
        this.updateParticles(dt);
        this.checkCollisions();
        this.updateScore(dt);
        this.updateBackground(dt);
        this.updateUI();
    }

    updateObstacles(dt) {
        this.obstacleTimer += dt;
        
        // Spawn obstacles
        if (this.obstacleTimer > 60 + Math.random() * 40) {
            this.spawnObstacle();
            this.obstacleTimer = 0;
        }

        // Update existing obstacles
        this.obstacles = this.obstacles.filter(obstacle => {
            obstacle.x -= this.gameSpeed * dt;
            return obstacle.x > -obstacle.width;
        });
    }

    updatePowerUps(dt) {
        this.powerUpTimer += dt;
        
        // Spawn power-ups occasionally
        if (this.powerUpTimer > 300 + Math.random() * 200) {
            this.spawnPowerUp();
            this.powerUpTimer = 0;
        }

        this.powerUps = this.powerUps.filter(powerUp => {
            powerUp.x -= this.gameSpeed * dt;
            powerUp.rotation += 0.1 * dt;
            return powerUp.x > -powerUp.width;
        });
    }

    updateParticles(dt) {
        this.particles.update(dt);
    }

    updateScore(dt) {
        this.score += Math.floor(this.gameSpeed * dt * 0.1);
        
        // Increase speed over time
        this.speedIncreaseTimer += dt;
        if (this.speedIncreaseTimer > 300) {
            this.gameSpeed += 0.2;
            this.speedIncreaseTimer = 0;
        }
    }

    updateBackground(dt) {
        this.backgroundOffset -= this.gameSpeed * dt * 0.5;
        if (this.backgroundOffset <= -100) {
            this.backgroundOffset = 0;
        }
    }

    spawnObstacle() {
        const types = ['spike', 'block', 'moving'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        const obstacle = {
            x: this.canvas.width,
            y: this.canvas.height - 80,
            width: 40,
            height: 60,
            type: type,
            color: type === 'spike' ? '#ff4757' : type === 'block' ? '#ff6b6b' : '#ff3838'
        };
        
        if (type === 'moving') {
            obstacle.originalY = obstacle.y;
            obstacle.moveSpeed = 2;
        }
        
        this.obstacles.push(obstacle);
    }

    spawnPowerUp() {
        const powerUp = {
            x: this.canvas.width,
            y: this.canvas.height - 150,
            width: 25,
            height: 25,
            type: 'coin',
            rotation: 0,
            color: '#ffd700'
        };
        
        this.powerUps.push(powerUp);
    }

    checkCollisions() {
        // Obstacle collisions
        for (let obstacle of this.obstacles) {
            if (this.isColliding(this.player, obstacle)) {
                this.playerHit();
                break;
            }
        }

        // Power-up collisions
        for (let i = this.powerUps.length - 1; i >= 0; i--) {
            if (this.isColliding(this.player, this.powerUps[i])) {
                this.collectPowerUp(this.powerUps[i]);
                this.powerUps.splice(i, 1);
            }
        }
    }

    isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }

    playerHit() {
        this.lives--;
        this.audio.play('hit');
        this.particles.createExplosion(this.player.x + this.player.width/2, this.player.y + this.player.height/2);
        
        if (this.lives <= 0) {
            this.gameOver();
        } else {
            this.player.invincible = true;
            setTimeout(() => {
                if (this.player) this.player.invincible = false;
            }, 1000);
        }
    }

    collectPowerUp(powerUp) {
        this.score += 100;
        this.coinsCollected++;
        this.audio.play('collect');
        this.particles.createSparkle(powerUp.x + powerUp.width/2, powerUp.y + powerUp.height/2);
    }

    updateUI() {
        if (this.scoreElement) this.scoreElement.textContent = this.score;
        if (this.livesElement) this.livesElement.textContent = this.lives;
        if (this.highScoreElement) this.highScoreElement.textContent = this.gameData.highScore;
    }

    render() {
        if (!this.ctx) return;

        // Clear canvas with gradient background
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#87CEEB');
        gradient.addColorStop(1, '#98FB98');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw moving background pattern
        this.drawBackground();

        // Draw ground with gradient
        const groundGradient = this.ctx.createLinearGradient(0, this.canvas.height - 30, 0, this.canvas.height);
        groundGradient.addColorStop(0, '#8B4513');
        groundGradient.addColorStop(1, '#654321');
        this.ctx.fillStyle = groundGradient;
        this.ctx.fillRect(0, this.canvas.height - 30, this.canvas.width, 30);

        // Draw game objects
        this.drawObstacles();
        this.drawPowerUps();
        
        if (this.player) {
            this.player.render(this.ctx);
        }
        
        this.particles.render(this.ctx);

        // Draw pause overlay
        if (this.isPaused) {
            this.drawPauseOverlay();
        }

        // Draw game over screen
        if (this.gameState === 'gameOver') {
            this.drawGameOverScreen();
        }
    }

    drawBackground() {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        this.ctx.lineWidth = 2;
        
        for (let i = 0; i < 10; i++) {
            const x = (i * 100 + this.backgroundOffset) % (this.canvas.width + 100);
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }
    }

    drawObstacles() {
        for (let obstacle of this.obstacles) {
            this.ctx.fillStyle = obstacle.color;
            
            if (obstacle.type === 'moving') {
                obstacle.y = obstacle.originalY + Math.sin(Date.now() * 0.005) * 20;
            }
            
            if (obstacle.type === 'spike') {
                this.drawSpike(obstacle);
            } else {
                this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
            }
            
            // Add glow effect
            this.ctx.shadowColor = obstacle.color;
            this.ctx.shadowBlur = 10;
            this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
            this.ctx.shadowBlur = 0;
        }
    }

    drawSpike(obstacle) {
        this.ctx.beginPath();
        this.ctx.moveTo(obstacle.x, obstacle.y + obstacle.height);
        this.ctx.lineTo(obstacle.x + obstacle.width/2, obstacle.y);
        this.ctx.lineTo(obstacle.x + obstacle.width, obstacle.y + obstacle.height);
        this.ctx.closePath();
        this.ctx.fill();
    }

    drawPowerUps() {
        for (let powerUp of this.powerUps) {
            this.ctx.save();
            this.ctx.translate(powerUp.x + powerUp.width/2, powerUp.y + powerUp.height/2);
            this.ctx.rotate(powerUp.rotation);
            
            this.ctx.fillStyle = powerUp.color;
            this.ctx.shadowColor = powerUp.color;
            this.ctx.shadowBlur = 15;
            this.ctx.fillRect(-powerUp.width/2, -powerUp.height/2, powerUp.width, powerUp.height);
            
            this.ctx.restore();
        }
    }

    drawPauseOverlay() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#fff';
        this.ctx.font = 'bold 48px Orbitron';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('PAUSED', this.canvas.width/2, this.canvas.height/2);
    }

    drawGameOverScreen() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#ff4757';
        this.ctx.font = 'bold 48px Orbitron';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('GAME OVER', this.canvas.width/2, this.canvas.height/2 - 80);
        
        if (this.showNewHighScore) {
            this.ctx.fillStyle = '#ffd700';
            this.ctx.font = '28px Orbitron';
            this.ctx.fillText('🏆 NEW HIGH SCORE! 🏆', this.canvas.width/2, this.canvas.height/2 - 40);
        }
        
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '24px Orbitron';
        this.ctx.fillText(`Score: ${this.score}`, this.canvas.width/2, this.canvas.height/2);
        this.ctx.fillText(`High Score: ${this.gameData.highScore}`, this.canvas.width/2, this.canvas.height/2 + 30);
        this.ctx.fillText(`Coins: ${this.coinsCollected}`, this.canvas.width/2, this.canvas.height/2 + 60);
        this.ctx.fillText('Click RESTART to play again', this.canvas.width/2, this.canvas.height/2 + 100);
    }

    gameOver() {
        this.gameState = 'gameOver';
        this.isRunning = false;
        this.audio.play('gameOver');
        
        // Save game data
        const isNewHighScore = this.storage.updateHighScore(this.score);
        this.storage.incrementGamesPlayed();
        this.storage.addCoins(this.coinsCollected);
        
        if (isNewHighScore) {
            this.showNewHighScore = true;
        }
    }
}