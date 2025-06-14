class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 5; // Speed at which the obstacle moves
    }

    update() {
        this.x -= this.speed; // Move the obstacle to the left
    }

    draw(context) {
        context.fillStyle = 'red'; // Color of the obstacle
        context.fillRect(this.x, this.y, this.width, this.height); // Draw the obstacle
    }

    static createObstacle(canvasWidth) {
        const width = 50; // Width of the obstacle
        const height = Math.random() * (canvas.height - 20) + 20; // Random height
        const x = canvasWidth; // Start off-screen
        const y = canvas.height - height; // Position at the bottom of the canvas
        return new Obstacle(x, y, width, height);
    }
}

export default Obstacle;