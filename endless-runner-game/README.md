# Endless Runner Game

## Overview
This is an endless runner game built using JavaScript, HTML5, and CSS. The game features a player character that must avoid obstacles while running indefinitely. The project is designed to be easily deployable both locally and via Docker.

## Tech Stack
- **JavaScript**: For game logic and interactivity.
- **HTML5**: For the game interface and rendering the canvas.
- **CSS**: For styling the game elements (if applicable).
- **Node.js**: For local development and package management.
- **Docker**: For containerization and easy deployment.

## Local Deployment Instructions
1. **Install Node.js and npm**: Ensure you have Node.js and npm installed on your machine.
2. **Navigate to the project directory**: Open your terminal and change to the project directory.
   ```bash
   cd endless-runner-game
   ```
3. **Install dependencies**: Run the following command to install the necessary dependencies.
   ```bash
   npm install
   ```
4. **Launch the game**: Start the local server with the command:
   ```bash
   npm start
   ```
5. **Play the game**: Open your browser and go to `http://localhost:8080` to start playing.

## Docker Deployment Instructions
1. **Build the Docker image**: Use the following command to build the Docker image for the game.
   ```bash
   docker build -t endless-runner-game .
   ```
2. **Run the Docker container**: Execute the command below to run the Docker container.
   ```bash
   docker run -p 8080:8080 endless-runner-game
   ```
3. **Access the game**: Open your browser and navigate to `http://localhost:8080` to play the game.

## How to Play
- Use the designated keys to control the player character.
- Avoid obstacles to keep running as long as possible.
- Enjoy the endless challenge!

Feel free to explore the code in the `src` directory to understand the game mechanics and logic. Happy gaming!