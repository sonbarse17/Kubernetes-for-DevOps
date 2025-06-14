class GameEngine {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.lastTime = 0;
        this.gameObjects = [];
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        this.lastTime = performance.now();
        this.gameLoop();
    }

    gameLoop() {
        if (!this.isRunning) return;

        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;

        this.update(deltaTime);
        this.render();

        this.lastTime = currentTime;
        requestAnimationFrame(() => this.gameLoop());
    }

    update(deltaTime) {
        // Update game objects
        this.gameObjects.forEach(object => object.update(deltaTime));
    }

    render() {
        // Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Render game objects
        this.gameObjects.forEach(object => object.render(this.context));
    }

    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
    }

    stop() {
        this.isRunning = false;
    }
}

export default GameEngine;