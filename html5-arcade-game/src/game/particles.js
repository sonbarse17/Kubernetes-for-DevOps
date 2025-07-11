export class Particle {
    constructor(x, y, vx, vy, color, life) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.life = life;
        this.maxLife = life;
        this.size = Math.random() * 4 + 2;
        this.gravity = 0.1;
    }

    update(deltaTime) {
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;
        this.vy += this.gravity * deltaTime;
        this.life -= deltaTime;
        
        // Fade out over time
        this.alpha = this.life / this.maxLife;
        
        return this.life > 0;
    }

    render(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 5;
        ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        ctx.restore();
    }
}

export class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    createExplosion(x, y) {
        const colors = ['#ff4757', '#ff6b6b', '#ff7675', '#fd79a8'];
        
        for (let i = 0; i < 15; i++) {
            const angle = (Math.PI * 2 * i) / 15;
            const speed = Math.random() * 3 + 2;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed - Math.random() * 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const life = Math.random() * 30 + 20;
            
            this.particles.push(new Particle(x, y, vx, vy, color, life));
        }
    }

    createSparkle(x, y) {
        const colors = ['#ffd700', '#ffed4e', '#fff200', '#f39c12'];
        
        for (let i = 0; i < 8; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 2 + 1;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed - Math.random();
            const color = colors[Math.floor(Math.random() * colors.length)];
            const life = Math.random() * 20 + 15;
            
            this.particles.push(new Particle(x, y, vx, vy, color, life));
        }
    }

    update(deltaTime) {
        this.particles = this.particles.filter(particle => 
            particle.update(deltaTime)
        );
    }

    render(ctx) {
        for (let particle of this.particles) {
            particle.render(ctx);
        }
    }

    clear() {
        this.particles = [];
    }
}