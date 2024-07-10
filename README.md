# Magical Arena

This project implements a simple Magical Arena game where two players battle until one's health reaches zero.

## Setup

1. Ensure you have Node.js installed on your system.
2. Clone this repository.
3. Navigate to the project directory.
4. Install dependencies:
   ```
   npm install
   ```

## Running the Game

To run the game, use the following command:

```
node index.js
```

This will simulate a battle between two pre-defined players:
- Player A: Health 50, Strength 5, Attack 10
- Player B: Health 100, Strength 10, Attack 5

## Running Tests

To run the tests, use the following command:

```
npm test
```

## Project Structure

- `index.js`: Main file to run the game
- `player.js`: Contains the Player class implementation
- `arena.js`: Contains the Arena class implementation
- `__tests__/`: Directory containing test files
  - `player.test.js`: Unit tests for the Player class
  - `arena.test.js`: Unit tests for the Arena class

## Game Rules

1. Players are defined by health, strength, and attack attributes.
2. Players attack in turns, with the player having lower health attacking first.
3. Damage is calculated based on attack value and die rolls.
4. The game ends when a player's health reaches 0.

## Implementation Details

- The `Player` class represents a player with health, strength, and attack attributes.
- The `Arena` class manages the fight between two players.
- Both classes use a 6-sided die (implemented using `Math.random()`) for attack and defense rolls.
- The game logic follows the rules specified in the problem statement.

## Future Improvements

- Add a command-line interface to allow users to input custom player attributes.
- Implement different types of attacks or special abilities.
- Create a graphical user interface for a more interactive experience.