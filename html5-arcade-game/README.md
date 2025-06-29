# 🎮 HTML5 Arcade Game

A modern HTML5 endless runner game built with JavaScript ES6 modules and Canvas API.

## Features

- **Smooth Gameplay**: 60fps game loop with requestAnimationFrame
- **Progressive Difficulty**: Game speed increases over time
- **Responsive Controls**: Space bar to jump over obstacles
- **Modern UI**: Beautiful gradient background and styled interface
- **Score System**: Track your high score and survival time

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6
- **Graphics**: Canvas API
- **Modules**: ES6 import/export
- **Server**: Node.js with http-server

## Quick Start

```bash
# Install dependencies
npm install

# Start the game server
npm start

# Open browser and navigate to
http://localhost:8080
```

## Game Controls

- **SPACEBAR**: Jump over red obstacles
- **F5**: Restart game after game over

## Game Mechanics

- **Player**: Green rectangle that can jump
- **Obstacles**: Red rectangles that move from right to left
- **Gravity**: Realistic physics with gravity and ground collision
- **Scoring**: Points increase over time, speed increases every 500 points

## Development

```bash
# For development with auto-reload
npm run dev
```

## Docker Support

```bash
# Build and run with Docker
docker build -t endless-runner .
docker run -p 8080:8080 endless-runner
```

## File Structure

```
endless-runner-game/
├── public/
│   └── index.html          # Game HTML template
├── src/
│   ├── index.js           # Main game initialization
│   └── game/
│       ├── engine.js      # Game engine and logic
│       ├── player.js      # Player class
│       ├── obstacles.js   # Obstacle management
│       └── utils.js       # Utility functions
├── package.json
├── Dockerfile
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the game thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this code for learning and projects!