export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

export function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

export function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export function normalizeAngle(angle) {
    while (angle > Math.PI) angle -= 2 * Math.PI;
    while (angle < -Math.PI) angle += 2 * Math.PI;
    return angle;
}

export function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

export class Timer {
    constructor() {
        this.startTime = Date.now();
        this.pausedTime = 0;
        this.isPaused = false;
    }
    
    pause() {
        if (!this.isPaused) {
            this.pausedTime = Date.now();
            this.isPaused = true;
        }
    }
    
    resume() {
        if (this.isPaused) {
            this.startTime += Date.now() - this.pausedTime;
            this.isPaused = false;
        }
    }
    
    getElapsed() {
        if (this.isPaused) {
            return this.pausedTime - this.startTime;
        }
        return Date.now() - this.startTime;
    }
    
    reset() {
        this.startTime = Date.now();
        this.pausedTime = 0;
        this.isPaused = false;
    }
}