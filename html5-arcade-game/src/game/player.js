export default class Player {
    constructor(x = 100, y = 300) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.velocityY = 0;
        this.gravity = 0.6;
        this.jumpPower = -12;
        this.isGrounded = true;
        this.groundY = y;
        this.originalY = y;
        
        // Animation properties
        this.animationFrame = 0;
        this.animationSpeed = 0.2;
        this.isJumping = false;
        this.invincible = false;
        this.invincibleTimer = 0;
        
        // Visual effects
        this.trailParticles = [];
        this.color = '#00ff88';
        this.glowIntensity = 0;
    }

    reset() {
        this.x = 100;
        this.y = this.originalY;
        this.velocityY = 0;
        this.isGrounded = true;
        this.isJumping = false;
        this.invincible = false;
        this.invincibleTimer = 0;
        this.trailParticles = [];
    }

    jump() {
        if (this.isGrounded) {
            this.velocityY = this.jumpPower;
            this.isGrounded = false;
            this.isJumping = true;
            this.glowIntensity = 20;
            return true;
        }
        return false;
    }

    update(deltaTime = 1) {
        // Update animation
        this.animationFrame += this.animationSpeed * deltaTime;
        
        // Apply gravity
        this.velocityY += this.gravity * deltaTime;
        this.y += this.velocityY * deltaTime;

        // Check ground collision
        if (this.y >= this.groundY) {
            this.y = this.groundY;
            this.velocityY = 0;
            this.isGrounded = true;
            this.isJumping = false;
        }
        
        // Update invincibility
        if (this.invincible) {
            this.invincibleTimer += deltaTime;
            if (this.invincibleTimer > 60) {
                this.invincible = false;
                this.invincibleTimer = 0;
            }
        }
        
        // Update glow effect
        if (this.glowIntensity > 0) {
            this.glowIntensity -= deltaTime;
        }
        
        // Update trail particles
        this.updateTrail(deltaTime);
    }
    
    updateTrail(deltaTime) {
        // Add new trail particle
        if (this.trailParticles.length < 8) {
            this.trailParticles.push({
                x: this.x + this.width/2,
                y: this.y + this.height/2,
                life: 1.0,
                maxLife: 1.0
            });
        }
        
        // Update existing particles
        this.trailParticles = this.trailParticles.filter(particle => {
            particle.life -= deltaTime * 0.05;
            return particle.life > 0;
        });
    }

    render(ctx) {
        // Draw trail particles
        this.renderTrail(ctx);
        
        // Calculate player color based on state
        let playerColor = this.color;
        if (this.invincible) {
            playerColor = Math.floor(this.invincibleTimer * 10) % 2 ? '#ff6b6b' : '#00ff88';
        }
        
        // Draw glow effect
        if (this.glowIntensity > 0 || this.invincible) {
            ctx.shadowColor = playerColor;
            ctx.shadowBlur = this.glowIntensity + (this.invincible ? 15 : 0);
        }
        
        // Draw main body with gradient
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
        gradient.addColorStop(0, playerColor);
        gradient.addColorStop(1, '#00cc66');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Draw animated details
        this.drawPlayerDetails(ctx);
        
        // Reset shadow
        ctx.shadowBlur = 0;
    }
    
    renderTrail(ctx) {
        for (let particle of this.trailParticles) {
            const alpha = particle.life / particle.maxLife;
            ctx.fillStyle = `rgba(0, 255, 136, ${alpha * 0.3})`;
            const size = alpha * 8;
            ctx.fillRect(
                particle.x - size/2, 
                particle.y - size/2, 
                size, 
                size
            );
        }
    }
    
    drawPlayerDetails(ctx) {
        // Draw eyes
        ctx.fillStyle = '#fff';
        ctx.fillRect(this.x + 8, this.y + 8, 6, 6);
        ctx.fillRect(this.x + 26, this.y + 8, 6, 6);
        
        // Draw pupils with animation
        ctx.fillStyle = '#000';
        const pupilOffset = this.isJumping ? 1 : Math.sin(this.animationFrame) * 0.5;
        ctx.fillRect(this.x + 10 + pupilOffset, this.y + 10, 2, 2);
        ctx.fillRect(this.x + 28 + pupilOffset, this.y + 10, 2, 2);
        
        // Draw mouth
        ctx.fillStyle = '#000';
        if (this.isJumping) {
            ctx.fillRect(this.x + 18, this.y + 22, 4, 6);
        } else {
            ctx.fillRect(this.x + 15, this.y + 25, 10, 2);
        }
        
        // Draw running animation legs
        if (this.isGrounded && !this.isJumping) {
            const legOffset = Math.sin(this.animationFrame * 2) * 2;
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x + 10 + legOffset, this.y + this.height, 6, 8);
            ctx.fillRect(this.x + 24 - legOffset, this.y + this.height, 6, 8);
        }
    }
}