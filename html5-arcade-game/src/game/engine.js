export default class GameEngine {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = null;
        this.obstacles = [];
        this.score = 0;
        this.gameSpeed = 2;
        this.isRunning = false;
        
        this.canvas.width = 800;
        this.canvas.height = 400;
    }

    start(player) {
        this.player = player;
        this.isRunning = true;
        this.setupControls();
    }

    setupControls() {
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && this.player) {
                this.player.jump();
            }
        });
    }

    update() {
        if (!this.isRunning || !this.player) return;

        this.player.update();
        this.updateObstacles();
        this.checkCollisions();
        this.score += 1;
        
        // Increase game speed over time
        if (this.score % 500 === 0) {
            this.gameSpeed += 0.5;
        }
    }

    updateObstacles() {
        // Add new obstacles
        if (Math.random() < 0.01) {
            this.obstacles.push({
                x: this.canvas.width,
                y: this.canvas.height - 60,
                width: 30,
                height: 60
            });
        }

        // Update obstacle positions
        this.obstacles = this.obstacles.filter(obstacle => {
            obstacle.x -= this.gameSpeed;
            return obstacle.x > -obstacle.width;
        });
    }

    checkCollisions() {
        for (let obstacle of this.obstacles) {
            if (this.player.x < obstacle.x + obstacle.width &&
                this.player.x + this.player.width > obstacle.x &&
                this.player.y < obstacle.y + obstacle.height &&
                this.player.y + this.player.height > obstacle.y) {
                this.gameOver();
            }
        }
    }

    render() {
        if (!this.ctx) return;

        // Clear canvas
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw ground
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(0, this.canvas.height - 20, this.canvas.width, 20);

        // Draw player
        if (this.player) {
            this.player.render(this.ctx);
        }

        // Draw obstacles
        this.ctx.fillStyle = '#FF0000';
        for (let obstacle of this.obstacles) {
            this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        }

        // Draw score
        this.ctx.fillStyle = '#000';
        this.ctx.font = '20px Arial';
        this.ctx.fillText(`Score: ${this.score}`, 10, 30);
    }

    gameOver() {
        this.isRunning = false;
        this.ctx.fillStyle = 'rgba(0,0,0,0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#FFF';
        this.ctx.font = '40px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Game Over!', this.canvas.width/2, this.canvas.height/2);
        this.ctx.fillText(`Final Score: ${this.score}`, this.canvas.width/2, this.canvas.height/2 + 50);
        this.ctx.fillText('Press F5 to restart', this.canvas.width/2, this.canvas.height/2 + 100);
    }
}