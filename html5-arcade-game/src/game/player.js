export default class Player {
    constructor() {
        this.x = 50;
        this.y = 300;
        this.width = 40;
        this.height = 40;
        this.velocityY = 0;
        this.gravity = 0.8;
        this.jumpPower = -15;
        this.isGrounded = true;
        this.groundY = 300;
    }

    jump() {
        if (this.isGrounded) {
            this.velocityY = this.jumpPower;
            this.isGrounded = false;
        }
    }

    update() {
        // Apply gravity
        this.velocityY += this.gravity;
        this.y += this.velocityY;

        // Check ground collision
        if (this.y >= this.groundY) {
            this.y = this.groundY;
            this.velocityY = 0;
            this.isGrounded = true;
        }
    }

    render(ctx) {
        // Draw player as a simple rectangle
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Add simple animation
        ctx.fillStyle = '#000';
        ctx.fillRect(this.x + 10, this.y + 10, 5, 5); // Eye
        ctx.fillRect(this.x + 25, this.y + 10, 5, 5); // Eye
    }
}