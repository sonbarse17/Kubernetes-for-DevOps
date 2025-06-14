class Player {
    constructor() {
        this.position = { x: 50, y: 150 }; // Initial position
        this.velocity = { x: 0, y: 0 }; // Initial velocity
        this.gravity = 0.5; // Gravity effect
        this.jumpStrength = -10; // Jump strength
        this.isJumping = false; // Jump state
    }

    move(direction) {
        if (direction === 'left') {
            this.position.x -= 5; // Move left
        } else if (direction === 'right') {
            this.position.x += 5; // Move right
        }
    }

    jump() {
        if (!this.isJumping) {
            this.velocity.y = this.jumpStrength; // Apply jump strength
            this.isJumping = true; // Set jumping state
        }
    }

    update() {
        // Apply gravity
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;

        // Check for ground collision
        if (this.position.y >= 150) {
            this.position.y = 150; // Reset to ground level
            this.isJumping = false; // Reset jump state
            this.velocity.y = 0; // Reset vertical velocity
        }
    }
}

export default Player;