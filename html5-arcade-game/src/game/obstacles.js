export class Obstacle {
    constructor(x, y, width, height, type = 'basic') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
        this.speed = 3;
        this.color = this.getColorByType();
        
        // Animation properties
        this.animationFrame = 0;
        this.originalY = y;
        this.moveSpeed = 2;
    }

    getColorByType() {
        switch(this.type) {
            case 'spike': return '#ff4757';
            case 'moving': return '#ff3838';
            case 'block': return '#ff6b6b';
            default: return '#ff0000';
        }
    }

    update(deltaTime, gameSpeed) {
        this.x -= gameSpeed * deltaTime;
        this.animationFrame += deltaTime * 0.1;
        
        // Moving obstacle behavior
        if (this.type === 'moving') {
            this.y = this.originalY + Math.sin(this.animationFrame) * 20;
        }
    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 8;
        
        if (this.type === 'spike') {
            this.drawSpike(ctx);
        } else {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        
        ctx.shadowBlur = 0;
    }
    
    drawSpike(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.height);
        ctx.lineTo(this.x + this.width/2, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        ctx.closePath();
        ctx.fill();
    }

    static createRandomObstacle(canvasWidth, canvasHeight) {
        const types = ['basic', 'spike', 'moving'];
        const type = types[Math.floor(Math.random() * types.length)];
        const width = 30 + Math.random() * 20;
        const height = 40 + Math.random() * 40;
        const x = canvasWidth;
        const y = canvasHeight - height - 30;
        
        return new Obstacle(x, y, width, height, type);
    }
}

export class PowerUp {
    constructor(x, y, type = 'coin') {
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
        this.type = type;
        this.rotation = 0;
        this.color = this.getColorByType();
        this.glowIntensity = 0;
    }
    
    getColorByType() {
        switch(this.type) {
            case 'coin': return '#ffd700';
            case 'gem': return '#e74c3c';
            case 'star': return '#f39c12';
            default: return '#ffd700';
        }
    }
    
    update(deltaTime, gameSpeed) {
        this.x -= gameSpeed * deltaTime;
        this.rotation += 0.1 * deltaTime;
        this.glowIntensity = Math.sin(Date.now() * 0.01) * 5 + 10;
    }
    
    render(ctx) {
        ctx.save();
        ctx.translate(this.x + this.width/2, this.y + this.height/2);
        ctx.rotate(this.rotation);
        
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.glowIntensity;
        
        if (this.type === 'star') {
            this.drawStar(ctx);
        } else {
            ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
        }
        
        ctx.restore();
    }
    
    drawStar(ctx) {
        const spikes = 5;
        const outerRadius = this.width/2;
        const innerRadius = outerRadius * 0.5;
        
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const angle = (i * Math.PI) / spikes;
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.fill();
    }
}

export default Obstacle;