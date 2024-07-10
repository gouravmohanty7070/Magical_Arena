# Magical Arena

This project implements a simple Magical Arena game where two players battle until one's health reaches zero.

## Setup

1. Ensure you have Node.js installed on your system.
2. Clone this repository.
3. Navigate to the project directory.

## Running the Game

To run the game, use the following command:

```
node index.js
```

## Running Tests

To run the tests, first install the testing dependencies:

```
npm install --save-dev jest
```

Then, run the tests using:

```
npm test
```

## Project Structure

- `index.js`: Main file to run the game
- `player.js`: Contains the Player class implementation
- `arena.js`: Contains the Arena class implementation
- `__tests__/`: Directory containing test files

## Game Rules

1. Players are defined by health, strength, and attack attributes.
2. Players attack in turns, with the player having lower health attacking first.
3. Damage is calculated based on attack value and die rolls.
4. The game ends when a player's health reaches 0.
